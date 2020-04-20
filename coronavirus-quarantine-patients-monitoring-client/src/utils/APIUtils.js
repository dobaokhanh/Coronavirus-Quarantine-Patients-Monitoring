import { API_BASE_URL, ACCESS_TOKEN, UNIT_LIST_SIZE } from './Constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export const loginAPI = (loginRequest) => {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
};

export const signupAPI = (signupRequest) => {
    return request({
        url: API_BASE_URL + '/auth/signup',
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
};

export const checkUserNameAvailability = (username) => {
    return request({
        url: API_BASE_URL + '/user/checkUsernameAvailability?username=' + username,
        method: 'GET'
    });
};

export const checkEmailAvailability = (email) => {
    return request({
        url: API_BASE_URL + '/user/checkEmailAvailability?email=' + email,
        method: 'GET'
    });
};

export const getAllUnitsAPI = (page, size) => {
    page = page || 0;
    size = size || UNIT_LIST_SIZE;

    return request({
        url: API_BASE_URL + '/units?page=' + page + '&size=' + size,
        method: 'GET'
    });
};

export const getUnitByIdAPI = (unitId) => {
    return request({
        url: API_BASE_URL + '/units/' + unitId,
        method: 'GET'
    });
};

export const getAllPatientsAPI = (unitId, page, size) => {
    page = page || 0;
    size = size || UNIT_LIST_SIZE;

    return request({
        url: API_BASE_URL + '/' + unitId + '/patients?page=' + page + '&size=' + size,
        method: 'GET'
    });
};
