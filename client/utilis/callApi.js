import fetch from 'isomorphic-fetch';

export default function callApi(endpoint, method = 'get', body = null) {
    let options = {
        headers: { 'content-type': 'application/json' },
        method
    };
    if(method != 'get' && method != 'delete') {
        options['body'] = JSON.stringify(body);
    }

    return fetch(`http://localhost:8000/api/${endpoint}`, options)
    .then(response => response.json() 
    .then(json => ({ json, response })))
    .then(({ json, response }) => {

        if (!response.ok) {
        return Promise.reject(json);
        }

        return json;
    })
    .then(
        response => response,
        error => error
    );
}