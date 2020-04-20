import * as actionTypes from './actionTypes';
import { ACCESS_TOKEN } from '../../utils/Constants';
import { loginAPI, signupAPI } from '../../utils/APIUtils';

// ------------------------- Login -------------------------

const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

const loginSuccess = (dataPayload, notification) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        data: dataPayload,
        notification: notification
    };
};

const loginFail = (errorMsg) => {
    return {
        type: actionTypes.LOGIN_FAIL,
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


// -------------------------------- Sign up---------------------

const signupStart = () => {
    return {
        type: actionTypes.SIGN_UP_START
    };
};

const signupSuccess = (dataPayload, notification) => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        data: dataPayload,
        notification: notification
    };
};

const signupFail = (errorMsg) => {
    return {
        type: actionTypes.SIGN_UP_FAIL,
        error: errorMsg
    };
};

export const signup = (signupRequest) => {
    return dispatch => {
        dispatch(signupStart());

        signupAPI(signupRequest)
            .then(response => {
                let notification = {
                    message: 'CQPM',
                    description: 'Thank you! You are successfully registerd. Please Login to continue.'
                };
                dispatch(signupSuccess(response, notification));
            })
            .catch(error => {
                let errorMsg = {
                    message: 'CQPM',
                    description: 'Sorry! Something went wrong. Please try again !'
                };
                dispatch(signupFail(errorMsg));
            })
    }
}