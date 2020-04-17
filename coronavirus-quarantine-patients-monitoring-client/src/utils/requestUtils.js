import { API_BASE_URL, ACCESS_TOKEN } from '../../utils/Constants';

export const request = (options, actionCreator) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ', localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };

    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => {
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        });
};