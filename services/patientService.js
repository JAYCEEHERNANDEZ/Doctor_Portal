import { getRequest } from "./adapter.js";

export const getPatient = (id, token) => {
    return getRequest(`/patients/${id}`, token);
};

export const getPatientHistory = (id, token) => {
    return getRequest(`/patients/${id}/history`, token);
};