import * as actionTypes from './actionTypes';
import { getAllPatientsAPI } from '../../utils/APIUtils';

const getAllPatientsStart = () => {
    return {
        type: actionTypes.GET_ALL_PATIENTS_START
    };
};

const getAllPatientsSuccess = (dataPayload) => {
    return {
        type: actionTypes.GET_ALL_PATIENTS_SUCCESS,
        data: dataPayload
    };
};

const getAllPatientsFail = (errorMsg) => {
    return {
        type: actionTypes.GET_ALL_PATIENTS_FAIL,
        error: errorMsg
    };
};

export const getAllPatients = (unitId, page, size) => {
    return dispatch => {
        dispatch(getAllPatientsStart());

        getAllPatientsAPI(unitId, page, size)
            .then(response => {
                dispatch(getAllPatientsSuccess(response));
            })
            .catch(error => {
                let errorMsg = {
                    message: 'CQPM',
                    description: 'Sorry! Something went wrong !'
                };
                dispatch(getAllPatientsFail(errorMsg));
            });
    };
};