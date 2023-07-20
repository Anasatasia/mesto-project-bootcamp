import {cards, imagePopup, imagePopupImg, imagePopupTitle, page} from "../index";
import {openPopup} from "./utils";

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export function createCard(name, link) {
    const cardTemplate = page.querySelector("#card-template").content;
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImg = card.querySelector(".card__image");
    card.querySelector(".card__name").textContent = name;
    cardImg.src = link;
    cardImg.alt = name;
    card.querySelector(".card__button").addEventListener("click", function (evt) {
        evt.target.classList.toggle("card__button_active");
    })
    card.querySelector(".card__delete-button").addEventListener('click', function (evt) {
        card.remove();
    })
    cardImg.addEventListener('click', function (evt) {
        imagePopupImg.src = link;
        imagePopupTitle.textContent = name;
        imagePopupImg.alt = name;
        openPopup(imagePopup);
    })
    return card;
}

export function addCard(name, link) {
    const card = createCard(name, link);
    cards.prepend(card);
}