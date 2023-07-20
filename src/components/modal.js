import {
    placeInputList,
    placePopup, placeSubmitButton,
    profileDescription,
    profileInputDescription,
    profileInputName,
    profileName,
    profilePopup, settings
} from "../index";
import {closePopup} from "./utils";
import {addCard} from "./card";
import {changeButtonState} from "./validate";

export const fillProfileInputs = function () {
    profileInputDescription.value = profileDescription.textContent;
    profileInputName.value = profileName.textContent;
}


export function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    const {place_popup_name, place_popup_link} = evt.currentTarget.elements;
    addCard(place_popup_name.value, place_popup_link.value);
    place_popup_name.value = '';
    place_popup_link.value = '';
    changeButtonState(placeSubmitButton, placeInputList, settings)
    closePopup(placePopup);
}

export function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const {profile_popup_name, profile_popup_description} = evt.currentTarget.elements;
    profileName.textContent = profile_popup_name.value;
    profileDescription.textContent = profile_popup_description.value;
    closePopup(profilePopup);
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