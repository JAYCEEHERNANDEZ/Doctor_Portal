import { postRequest, putRequest } from "./adapter.js";

export const createConsultation = (data, token) => {
    return postRequest("/consultations", data, token);
};

export const updateConsultation = (id, data, token) => {
    return putRequest(`/consultations/${id}`, data, token);
};