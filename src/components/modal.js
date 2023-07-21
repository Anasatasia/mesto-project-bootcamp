import {
    avatarPopup, avatarSubmitButton,
    placeInputList,
    placePopup, placeSubmitButton, profileAvatar,
    profileDescription,
    profileInputDescription,
    profileInputName,
    profileName,
    profilePopup, profileSubmitButton, settings
} from "../index";
import {closePopup} from "./utils";
import {addCard} from "./card";
import {changeButtonState} from "./validate";
import {patchAvatar, patchProfile, postCard} from "./api";

export let authorId = '';
export const fillProfile = function (name, about, avatarLink, id) {
    profileName.textContent = name;
    profileDescription.textContent = about;
    profileAvatar.src = avatarLink;
    authorId = id;
}

export const fillProfileInputs = function () {
    profileInputDescription.value = profileName.textContent;
    profileInputName.value = profileDescription.textContent;
}


export function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    const {place_popup_name, place_popup_link} = evt.currentTarget.elements;
    placeSubmitButton.textContent = "Создание...";
    postCard(place_popup_name.value, place_popup_link.value).then((data) => {
        addCard(data.name, data.link, data.likes, data._id, data.owner);
    })
        .then(() => {
            place_popup_name.value = '';
            place_popup_link.value = '';
        })
        .then(() => {
            changeButtonState(placeSubmitButton, placeInputList, settings)
        })
        .then(() => {
            closePopup(placePopup)
        })
        .catch(console.error)
        .finally(() => {
            placeSubmitButton.textContent = "Создать";
        })
}

export function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    const {avatar_popup_link} = evt.currentTarget.elements;
    avatarSubmitButton.textContent = "Сохранение...";
    patchAvatar(avatar_popup_link.value).then((data) => {
        profileAvatar.src = data.avatar;
    })
        .then(() => closePopup(avatarPopup))
        .catch(console.error)
        .finally(() => {
            avatarSubmitButton.textContent = "Сохранить";
        })
}

export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const {profile_popup_name, profile_popup_description} = evt.currentTarget.elements;
    profileSubmitButton.textContent = "Сохранение...";
    patchProfile(profile_popup_name.value, profile_popup_description.value).then((data) => {
        profileName.textContent = data.name
        profileDescription.textContent = data.about
    })
        .then(() => closePopup(profilePopup))
        .catch(console.error)
        .finally(() => {
            profileSubmitButton.textContent = "Сохранить";
        })
}

export function closePopupOverlay(popup) {
    popup.addEventListener('click', function (evt) {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    })
}

export function closePopupByEsc(evt) {
    if (evt.key === "Escape") {
        const openPopup = document.querySelector(".popup_opened");
        if (openPopup !== null) {
            closePopup(openPopup);
        }
    }
}