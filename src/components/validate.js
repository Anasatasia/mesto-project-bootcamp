import {page} from "../index";

export function showError(input, form, errorMessage, settings) {
    input.classList.add(settings.inputErrorClass);
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = errorMessage;
    span.classList.add(settings.errorClass);
}

export function hideError(input, form, settings) {
    input.classList.remove(settings.inputErrorClass);
    const span = form.querySelector(`#${input.id}-error`);
    span.textContent = '';
    span.classList.remove(settings.errorClass);
}

export function isValid(input, form, settings) {
    if (!input.validity.valid) {
        showError(input, form, input.validationMessage, settings);
    }
    else {
        hideError(input, form, settings);
    }
}

export function hasInvalidInput(inputList) {
    let flag = 1;
    inputList.forEach((input) => {
        if (!input.validity.valid) {
            flag = 0;
        }
    })
    return flag !== 1;
}

export function changeButtonState(submitButton, inputList, settings) {
    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.setAttribute("disabled", "disabled");
    }
    else {
        submitButton.classList.remove(settings.inactiveButtonClass);
        submitButton.removeAttribute("disabled");
    }
}

export function setEventListener(form, settings) {
    const inputList = form.querySelectorAll(settings.inputSelector);
    const submitButton = form.querySelector(settings.submitButtonSelector);
    changeButtonState(submitButton, inputList, settings);
    inputList.forEach((input) => {
        input.addEventListener('input', function (evt) {
            isValid(input, form, settings);
            changeButtonState(submitButton, inputList, settings);
        })
    })
}

export function enableValidation(settings) {
    const formList = page.querySelectorAll(settings.formSelector);
    formList.forEach((form) => {
        setEventListener(form, settings);
    })
}