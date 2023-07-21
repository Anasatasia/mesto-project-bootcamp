import {checkResponse} from "./utils";

const config = {
    baseUrl: 'https://nomoreparties.co/v1/exp-mipt-fbc-1',
    headers: {
        authorization: 'e2b74456-ec21-4848-ac9c-a11ddea4417d',
        'Content-Type': 'application/json'
    }
}

export function getProfile() {
    return fetch(config.baseUrl + '/users/me', {
        headers: config.headers,
    })
        .then(checkResponse);
}

export function getCards() {
    return fetch(config.baseUrl + '/cards', {
        headers: config.headers,
    })
        .then(checkResponse);
}

export function patchProfile(name, about) {
    return fetch(config.baseUrl + '/users/me', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
        .then(checkResponse);

}

export function postCard(name, link) {
    return fetch(config.baseUrl + '/cards', {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(checkResponse);
}

export function deleteCard(id) {
    return fetch(config.baseUrl + '/cards/' + id, {
        method: 'DELETE',
        headers: config.headers,
    })
        .then(checkResponse);
}

export function putLike(id) {
    return fetch(config.baseUrl + '/cards/likes/' + id, {
        method: 'PUT',
        headers: config.headers,
    })
        .then(checkResponse);
}

export function deleteLike(id) {
    return fetch(config.baseUrl + '/cards/likes/' + id, {
        method: 'DELETE',
        headers: config.headers,
    })
        .then(checkResponse);
}

export function patchAvatar(link) {
    return fetch(config.baseUrl + '/users/me/avatar', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link,
        })
    })
        .then(checkResponse);
}