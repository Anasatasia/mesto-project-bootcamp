import {cards, imagePopup, imagePopupImg, imagePopupTitle, page} from "../index";
import {openPopup} from "./utils";
import {deleteCard, deleteLike, putLike} from "./api";
import {authorId} from "./modal";


function toggleLike(evt, id, likes, cardLikeNumber) {
    if (evt.target.classList.contains("card__button_active")) {
        deleteLike(id).then((data) => {
            cardLikeNumber.textContent = data.likes.length;
        })
            .then(() => {
                evt.target.classList.remove("card__button_active");
            })
            .catch(console.error)
    }
    else {
        putLike(id).then((data) => {
            cardLikeNumber.textContent = data.likes.length;
        })
            .then(() => {
                evt.target.classList.add("card__button_active");
            })
            .catch(console.error)
    }
}

export function createCard(name, link, likes, id, owner) {
    const cardTemplate = page.querySelector("#card-template").content;
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImg = card.querySelector(".card__image");
    const cardLikeNumber = card.querySelector(".card__like-number");
    const cardLikeButton = card.querySelector(".card__button");
    const cardDeleteButton = card.querySelector(".card__delete-button");
    cardLikeNumber.textContent = likes.length;
    card.querySelector(".card__name").textContent = name;
    cardImg.src = link;
    cardImg.alt = name;
    likes.forEach((like) => {
        if (like._id === authorId) {
            cardLikeButton.classList.add("card__button_active");
        }
    })
    if (owner._id !== authorId) {
        cardDeleteButton.classList.add("card__delete-button_inactive");
    }
    cardLikeButton.addEventListener("click", function (evt) {
        toggleLike(evt, id, likes, cardLikeNumber);
    })
    if (owner._id === authorId) {
        cardDeleteButton.addEventListener('click', function (evt) {
            deleteCard(id).then(() => {
                card.remove();
            })
                .catch(console.error)
        })
    }
    cardImg.addEventListener('click', function (evt) {
        imagePopupImg.src = link;
        imagePopupTitle.textContent = name;
        imagePopupImg.alt = name;
        openPopup(imagePopup);
    })
    return card;
}

export function addCard(name, link, likes, id, owner) {
    const card = createCard(name, link, likes, id, owner);
    cards.prepend(card);
}

export function initialCards(cardsData) {
    console.log(cardsData);
    cardsData.forEach((data) => {
        addCard(data.name, data.link, data.likes, data._id, data.owner);
    })
}