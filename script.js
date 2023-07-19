const page = document.querySelector(".page");
const profileEditButton = page.querySelector(".profile__edit-button");
const profileForm = page.querySelector("#profile-popup-form");
const profilePopup = page.querySelector("#profile-popup");
const profileCloseButton = profilePopup.querySelector(".popup__close-button");
const profileInputName = profilePopup.querySelector("#profile_popup_name");
const profileInputDescription = profilePopup.querySelector("#profile_popup_description");
const profileName = page.querySelector(".profile__name");
const profileDescription = page.querySelector(".profile__description");
const cards = page.querySelector(".cards");
const placePopup = page.querySelector("#place-popup");
const placeCloseButton = placePopup.querySelector(".popup__close-button");
const placeAddButton = page.querySelector(".profile__add-button");
const placeForm = placePopup.querySelector(".popup__form");
const imagePopup = page.querySelector(".popup-image");
const imagePopupImg = imagePopup.querySelector(".popup-image__image");
const imagePopupTitle = imagePopup.querySelector(".popup-image__title");
const imagePopupCloseButton = imagePopup.querySelector(".popup-image__close-button");
let cardId = 0;

const initialCards = [
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

profileEditButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup(profilePopup);
})

placeAddButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup(placePopup);
})

profileCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePopup(profilePopup);
})

imagePopupCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePopup(imagePopup);
})
placeCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePopup(placePopup);
})
const openPopup = function (popup) {
    popup.classList.add("popup_opened");
}

const closePopup = function (popup) {
    popup.classList.remove("popup_opened");
}

const changeInputValues = function () {
    profileInputDescription.value = profileDescription.textContent;
    profileInputName.value = profileName.textContent;
}

changeInputValues();

function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    const {place_popup_name, place_popup_link} = evt.currentTarget.elements;
    addCard(place_popup_name.value, place_popup_link.value, cardId);
    cardId += 1;
    closePopup(placePopup);
}

placeForm.addEventListener('submit', handlePlaceFormSubmit);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const {profile_popup_name, profile_popup_description} = evt.currentTarget.elements;
    profileName.textContent = profile_popup_name.value;
    profileDescription.textContent = profile_popup_description.value;
    closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

function addCard(name, link, index) {
    const cardTemplate = page.querySelector("#card-template").content;
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    card.querySelector(".card__name").textContent = name;
    card.querySelector(".card__image").src = link;
    card.setAttribute("id", index);
    card.querySelector(".card__button").addEventListener("click", function (evt) {
        evt.target.classList.toggle("card__button_active");
    })
    card.querySelector(".card__delete-button").addEventListener('click', function (evt) {
        cards.querySelector(`[id='${index}']`).remove();
    })
    card.querySelector(".card__image").addEventListener('click', function (evt) {
        imagePopupImg.src = link;
        imagePopupTitle.textContent = name;
        openPopup(imagePopup);
    })
    cards.prepend(card);
}

initialCards.forEach((cardElement) => {
    addCard(cardElement.name, cardElement.link, cardId);
    cardId += 1;
})