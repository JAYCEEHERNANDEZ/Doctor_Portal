import { getRequest, putRequest } from "./adapter.js";

export const getSchedule = (token) => {
    return getRequest("/appointments/schedule", token);
};

export const acceptAppointment = (id, token) => {
    return putRequest(`/appointments/${id}/accept`, {}, token);
};

export const completeAppointment = (id, token) => {
    return putRequest(`/appointments/${id}/complete`, {}, token);
};