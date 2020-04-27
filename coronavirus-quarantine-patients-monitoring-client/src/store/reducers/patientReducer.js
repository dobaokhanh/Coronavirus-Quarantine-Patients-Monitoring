import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    patients: [],
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
    last: true,
    isLoading: false,
    error: null,
    notification: null
};

const getAllPatientsStart = (state, action) => {
    return updateObject(state, { error: null, isLoading: true, notification: null})
};

const getAllPatientsSuccess = (state , action) => {
    return updateObject(state, {
        patients: action.data.content,
        page: action.data.page,
        size: action.data.size,
        totalElements: action.data.totalElements,
        totalPages: action.data.totalPages,
        last: action.data.last,
        isLoading: false,
        error: null,
        notification: null
    });
};

const getAllPatientsFail = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        error: action.error,
        notification: null
    });
};

const addNewPatientSuccess = (state, action) => {
    return updateObject(state, {
        patients: state.patients.concat(action.data),
        isLoading: false,
        error: null,
        notification: action.notification
    });
};

const addNewPatientFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        notification: null
    });
};

const deletePatientSuccess = (state, action) => {
    return updateObject(state, {
        notification: action.notification,
        error: null,
        isLoading: false
    });
};

const deletePatientFail = (state, action) => {
    return updateObject(state, {
        notification: null,
        error: action.error,
        isLoading: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_ALL_PATIENTS_START: return getAllPatientsStart(state, action);
        case actionTypes.GET_ALL_PATIENTS_SUCCESS: return getAllPatientsSuccess(state, action);
        case actionTypes.GET_ALL_PATIENTS_FAIL: return getAllPatientsFail(state, action);
        case actionTypes.ADD_NEW_PATIENT_SUCCESS: return addNewPatientSuccess(state, action);
        case actionTypes.ADD_NEW_PATIENT_FAIL: return addNewPatientFail(state, action);
        case actionTypes.DELETE_PATIENT_SUCCESS: return deletePatientSuccess(state, action);
        case actionTypes.DELETE_PATIENT_FAIL: return deletePatientFail(state, action);
        default: return state;
    };
};

export default reducer;