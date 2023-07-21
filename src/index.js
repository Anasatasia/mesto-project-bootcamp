import './styles/index.css';
import {
    closePopupOverlay, fillProfile,
    fillProfileInputs, handleAvatarFormSubmit,
    handlePlaceFormSubmit,
    handleProfileFormSubmit
} from "./components/modal";
import {enableValidation} from "./components/validate";
import {closePopup, openPopup} from "./components/utils";
import {initialCards} from "./components/card";
export const page = document.querySelector(".page");
const profileEditButton = page.querySelector(".profile__edit-button");
const profileForm = page.querySelector("#profile-popup-form");
export const profilePopup = page.querySelector("#profile-popup");
export const profileSubmitButton = profilePopup.querySelector(".popup__button");
const profileCloseButton = profilePopup.querySelector(".popup__close-button");
export const profileInputName = profilePopup.querySelector("#profile_popup_name");
export const profileInputDescription = profilePopup.querySelector("#profile_popup_description");
export const profileName = page.querySelector(".profile__name");
export const profileDescription = page.querySelector(".profile__description");
export const cards = page.querySelector(".cards");
export const placePopup = page.querySelector("#place-popup");
const placeCloseButton = placePopup.querySelector(".popup__close-button");
const placeAddButton = page.querySelector(".profile__add-button");
const placeForm = placePopup.querySelector(".popup__form");
export const placeInputList = placePopup.querySelectorAll(".popup__input");
export const placeSubmitButton = placePopup.querySelector(".popup__button");
export const imagePopup = page.querySelector(".popup-image");
export const imagePopupImg = imagePopup.querySelector(".popup-image__image");
export const imagePopupTitle = imagePopup.querySelector(".popup-image__title");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close-button");
const popupList = page.querySelectorAll(".popup");
export const profileAvatar = page.querySelector(".profile__avatar");
export const avatarPopup = page.querySelector("#avatar-popup");
const avatarButton = page.querySelector(".profile__avatar-button");
const avatarCloseButton = avatarPopup.querySelector(".popup__close-button");
const avatarForm = avatarPopup.querySelector(".popup__form");
export const avatarSubmitButton = avatarPopup.querySelector(".popup__button");
export const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_invalid'
}

fillProfile();

profileEditButton.addEventListener('click', (evt) => {
    fillProfileInputs();
    openPopup(profilePopup);
})

avatarButton.addEventListener("click", (evt) => {
    openPopup(avatarPopup);
})

placeAddButton.addEventListener('click', (evt) => {
    openPopup(placePopup);
})

profileCloseButton.addEventListener('click', (evt) => {
    closePopup(profilePopup);
})

imagePopupCloseButton.addEventListener('click', (evt) => {
    closePopup(imagePopup);
})
placeCloseButton.addEventListener('click', (evt) => {
    closePopup(placePopup);
})

avatarCloseButton.addEventListener('click', (evt) => {
    closePopup(avatarPopup);
})


placeForm.addEventListener('submit', handlePlaceFormSubmit);

profileForm.addEventListener('submit', handleProfileFormSubmit);

avatarForm.addEventListener('submit', handleAvatarFormSubmit);

enableValidation(settings);

popupList.forEach((popup) => {
    closePopupOverlay(popup);
})

initialCards();