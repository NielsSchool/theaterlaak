import { authHeader, config, handleError, handleResponse } from '../Helpers';

const voorstellingService = {
    add,
    getAll,
    getById,
    update,
    delete: _delete
};
export default voorstellingService;

async function add(Titel, BetrokkeneId, omschrijving) {
    const body = { Titel: Titel, BetrokkeneId: BetrokkeneId, omschrijving: omschrijving};
    let response = await fetch('https://localhost:7242/api/voorstelling/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(handleResponse, handleError);
    if (!response.ok) {
        throw new Error(`http error! status: ${response.status}`)
    } 
    return await response.json();
}

async function getAll() {
    const response = await fetch('https://localhost:7242/api/voorstelling/', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
            throw new Error(`http error! status: ${response.status}`)
    }    

    return await response.json();
}

async function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return await fetch(config.apiUrl + 'api/voorstelling/' + id, requestOptions).then(handleResponse, handleError);
}

async function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return await fetch(config.apiUrl + 'api/voorstelling/' + user.id, requestOptions).then(handleResponse, handleError);
}

async function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
};

    return await fetch(config.apiUrl + 'api/voorstelling/' + id, requestOptions).then(handleResponse, handleError);
}