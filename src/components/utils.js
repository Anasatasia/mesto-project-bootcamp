import {closePopupByEsc} from "./modal";

export const openPopup = function (popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupByEsc);
}

export const closePopup = function (popup) {
    document.removeEventListener('keydown', closePopupByEsc);
    popup.classList.remove("popup_opened");
}