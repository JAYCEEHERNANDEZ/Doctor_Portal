import { getRequest, postRequest } from "./adapter.js";

export const createLabRequest = (data, token) => {
    return postRequest("/labs/request", data, token);
};

export const getLabResults = (appointmentId, token) => {
    return getRequest(`/labs/results/${appointmentId}`, token);
};