import * as actionTypes from './actionTypes';
import { getAllPatientsAPI, addNewPatientAPI, deletePatientAPI } from '../../utils/APIUtils';

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

export const addNewPatientSuccess = (dataPayload, notificationMsg) => {
    return {
        type: actionTypes.ADD_NEW_PATIENT_SUCCESS,
        data: dataPayload,
        notification: notificationMsg
    };
};

export const addNewPatientFail = (errorMsg) => {
    return {
        type: actionTypes.ADD_NEW_PATIENT_FAIL,
        error: errorMsg
    };
};

export const addNewPatient = (unitId, patientRequest) => {
    return dispatch => {
        addNewPatientAPI(unitId, patientRequest)
            .then(response => {
                let notificationMsg = {
                    message: 'CQPM',
                    description: 'Patient added successfully !'
                };
                dispatch(addNewPatientSuccess(response, notificationMsg));
            })
            .catch(error => {
                let errorMsg = {
                    message: 'CQPM',
                    description: 'Sorry! Something went wrong'
                };
                dispatch(deletePatientFail(errorMsg))
            });
    };
};

export const deletePatientSuccess = (notificationMsg) => {
    return {
        type: actionTypes.DELETE_PATIENT_SUCCESS,
        notification: notificationMsg
    };
};

export const deletePatientFail = (errorMsg) => {
    return {
        type: actionTypes.DELETE_PATIENT_FAIL,
        error: errorMsg
    };
};

export const deletePatient = (unitId, patientRequest) => {
    return dispatch => {
        deletePatientAPI(unitId, patientRequest)
            .then(response => {
                let notificationMsg = {
                    message: 'CQPM',
                    description: 'Delete successfully !'
                };
                dispatch(deletePatientSuccess(notificationMsg))
            })
            .catch(error => {
                let errorMsg = {
                    message: 'CQPM',
                    description: 'Sorry! Something went wrong'
                };
                dispatch(deletePatientFail(errorMsg))
            });
    };
};