import { request } from '../../utils/requestUtils';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from './actionTypes';
import { ACCESS_TOKEN, API_BASE_URL } from '../../utils/Constants';

export const loginStart = () => {
    return {
        type: LOGIN_START
    };
};

export const loginSuccess = (dataPayload) => {
    return {
        type: LOGIN_SUCCESS,
        data: dataPayload
    };
};

export const loginFail = (errorMsg) => {
    return {
        type: LOGIN_FAIL,
        error: errorMsg
    }
}

export const login = (loginRequest) => {
    let promise = request({
        url: API_BASE_URL + '/auth/signin',
        method: 'POST',
        body: JSON.stringify(loginRequest)
    }).catch (error => {
        return loginFail(error);
    });

    return loginSuccess(promise);
};


export const signup = (signupRequest) => {
    return request({
        url: API_BASE_URL + '/auth/signup',
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
};

export const checkUserNameAvailability = (username) => {
    return request ({
        url: API_BASE_URL + '/user/checkUsernameAvailability?username=' + username,
        method: 'GET'
    });
};

export const checkEmailAvailability = (email) => {
    return request({
        url: API_BASE_URL + 'user/checkEmailAvailability?email=' + email, 
    });
};
