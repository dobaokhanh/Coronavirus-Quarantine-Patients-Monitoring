import * as actionTypes from './actionTypes';
import { getAllUnitsAPI, getUnitByIdAPI } from '../../utils/APIUtils';

const getAllUnitsStart = () => {
    return {
        type: actionTypes.GET_ALL_UNITS_START
    };
};

const getAllUnitsSuccess = (dataPayload) => {
    return {
        type: actionTypes.GET_ALL_UNITS_SUCCESS,
        data: dataPayload
    };
};

const getAllUnitsFail = (errorMsg) => {
    return {
        type: actionTypes.GET_ALL_UNITS_FAIL,
        error: errorMsg
    };
};

export const getAllUnits = (page, size) => {
    return dispatch => {
        dispatch(getAllUnitsStart());

        getAllUnitsAPI(page, size)
            .then(response => {
                dispatch(getAllUnitsSuccess(response));
            })
            .catch(error => {
                let errorMsg = {
                    message: 'CQPM',
                    description: 'Sorry! Something went wrong !'
                }
                dispatch(getAllUnitsFail(errorMsg));
            });
    };
};

const getUnitByIdSuccess = (dataPayload) => {
    return {
        type: actionTypes.GET_UNIT_BY_ID_SUCCESS,
        data: dataPayload
    };
};

const getUnitByIdFail = (errorMsg) => {
    return {
        type: actionTypes.GET_UNIT_BY_ID_FAIL,
        error: errorMsg
    };
};

export const getUnitById = (unitId) => {
    return dispatch => {
        getUnitByIdAPI(unitId)
            .then(response => {
                dispatch(getUnitByIdSuccess(response));
            })
            .catch(error => {
                console.log(error);
                let errorMsg = {
                    message: 'CQPM',
                    description: 'Sorry! Cannot load unit name !'
                };
                dispatch(getUnitByIdFail(errorMsg));
            });
    };
};