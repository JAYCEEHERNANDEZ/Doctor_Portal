import { postRequest } from "./adapter.js";

export const verifyToken = async (token) => {
    return await postRequest("/auth/verify", {}, token);
};