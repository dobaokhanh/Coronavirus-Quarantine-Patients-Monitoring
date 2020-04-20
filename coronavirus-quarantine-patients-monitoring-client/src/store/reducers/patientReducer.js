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
    error: null
};

const getAllPatientsStart = (state, action) => {
    return updateObject(state, { error: null, isLoading: true})
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
        error: null
    });
};

const getAllPatientsFail = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_ALL_PATIENTS_START: return getAllPatientsStart(state, action);
        case actionTypes.GET_ALL_PATIENTS_SUCCESS: return getAllPatientsSuccess(state, action);
        case actionTypes.GET_ALL_PATIENTS_FAIL: return getAllPatientsFail(state, action);
        default: return state;
    };
};

export default reducer;