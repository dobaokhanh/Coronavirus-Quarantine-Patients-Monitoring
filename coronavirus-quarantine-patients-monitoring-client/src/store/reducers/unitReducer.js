import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    currentUnit: null,
    units: [],
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
    last: true,
    isLoading: false,
    error: null
};

const getAllUnitsStart = (state, action) => {
    return updateObject(state, {isLoading: true, error: null});
};

const getAllUnitsSuccess = (state, action) => {
    return updateObject(state, {
        currentUnit: null,
        units: action.data.content,
        page: action.data.page,
        size: action.data.size,
        totalElements: action.data.totalElements,
        totalPages: action.data.totalPages,
        last: action.data.last,
        isLoading: false,
        error: null
    });
};

const getAllUnitsFail = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        error: action.error
    });
};

const getUnitByIdSuccess = (state, action) => {
    return updateObject(state, {
        currentUnit: action.data,
        error: null,
        isLoading: false
    });
};

const getUnitByIdFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        isLoading: false
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_ALL_UNITS_START: return getAllUnitsStart(state, action);
        case actionTypes.GET_ALL_UNITS_SUCCESS: return getAllUnitsSuccess(state, action);
        case actionTypes.GET_ALL_UNITS_FAIL: return getAllUnitsFail(state, action);
        case actionTypes.GET_UNIT_BY_ID_SUCCESS: return getUnitByIdSuccess(state, action);
        case actionTypes.GET_UNIT_BY_ID_FAIL: return getUnitByIdFail(state, action);
        default: return state;
    };
};

export default reducer;