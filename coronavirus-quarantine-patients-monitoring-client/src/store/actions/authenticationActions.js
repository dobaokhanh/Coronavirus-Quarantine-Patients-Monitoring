import { request } from '../../utils/requestUtils';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes';
import { API_BASE_URL, ACCESS_TOKEN } from '../../utils/Constants';
import { loginAPI } from '../../utils/APIUtils';

const loginStart = () => {
    return {
        type: LOGIN_START
    };
};

const loginSuccess = (dataPayload, notification) => {
    return {
        type: LOGIN_SUCCESS,
        data: dataPayload,
        notification: notification
    };
};

const loginFail = (errorMsg) => {
    return {
        type: LOGIN_FAIL,
        error: errorMsg
    };
}

export const login = (loginRequest) => {
    return dispatch => {

        dispatch(loginStart());

        loginAPI(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                let notification = {
                    message: 'CQPM',
                    description: "Your're successfully logged in."
                };
                dispatch(loginSuccess(response, notification));
            })
            .catch(error => {
                if (error.status === 401) {
                    let errorMsg = {
                        message: 'CQPM',
                        description: "Your username or password is in correct. Please try again!"
                    };
                    dispatch(loginFail(errorMsg));
                } else {
                    let errorMsg = {
                        message: 'CQPM',
                        description: "Sorry! Something went wrong. Please try again!"
                    };
                    dispatch(loginFail(errorMsg));
                }

            });
    }
};


export const signup = (signupRequest) => {
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
        url: API_BASE_URL + 'user/checkEmailAvailability?email=' + email,
    });
};
