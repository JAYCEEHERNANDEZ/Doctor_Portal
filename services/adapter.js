import axios from "axios";

const ADAPTER_URL = "http://localhost:4000";

export const getRequest = async (endpoint, token) => {
    const res = await axios.get(`${ADAPTER_URL}${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
};

export const postRequest = async (endpoint, data, token) => {
    const res = await axios.post(`${ADAPTER_URL}${endpoint}`, data, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
};

export const putRequest = async (endpoint, data, token) => {
    const res = await axios.put(`${ADAPTER_URL}${endpoint}`, data, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
};