import * as actionTypes  from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    error: null,
    loading: false,
    notification: null,
    authRedirectPath: null
};

// ------------------- Sign in -----------------------

const loginStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const loginSuccess = (state, action) => {
    return updateObject(state, {
        token: action.data.accessToken,
        error: null,
        loading: false,
        notification: action.notification,
        authRedirectPath: '/units'
    });
};

const loginFail = (state, action) => {
    return updateObject(state, {
        token: null,
        error: action.error,
        loading: false,
        notification: null
    });
};

//--------------------------Sign up -------------------------
const signupStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const signupSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        authRedirectPath: '/login',
        notification: action.notification
    });
};

const signupFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        notification: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.SIGN_UP_START: return signupStart(state, action);
        case actionTypes.SIGN_UP_SUCCESS: return signupSuccess(state, action);
        case actionTypes.SIGN_UP_FAIL: return signupFail(state, action);
        default: return state;
    };
};

export default reducer;