import './styles/index.css';
import {
    closePopupByEsc, closePopupOverlay,
    fillProfileInputs,
    handlePlaceFormSubmit,
    handleProfileFormSubmit
} from "./components/modal";
import {setValidation} from "./components/validate";
import {addCard, initialCards} from "./components/card";
import {closePopup, openPopup} from "./components/utils";
export const page = document.querySelector(".page");
const profileEditButton = page.querySelector(".profile__edit-button");
const profileForm = page.querySelector("#profile-popup-form");
export const profilePopup = page.querySelector("#profile-popup");
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
export const imagePopup = page.querySelector(".popup-image");
export const imagePopupImg = imagePopup.querySelector(".popup-image__image");
export const imagePopupTitle = imagePopup.querySelector(".popup-image__title");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close-button");
export const formList = page.querySelectorAll(".popup__form");
const popupList = page.querySelectorAll(".popup");

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

initialCards.forEach((cardElement) => {
    addCard(cardElement.name, cardElement.link);
})

profileEditButton.addEventListener('click', (evt) => {
    fillProfileInputs();
    openPopup(profilePopup);
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


placeForm.addEventListener('submit', handlePlaceFormSubmit);

profileForm.addEventListener('submit', handleProfileFormSubmit);

setValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_invalid'
});

popupList.forEach((popup) => {
    closePopupOverlay(popup);
})

closePopupByEsc();