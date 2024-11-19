import axios from "axios";

const api = axios.create({
  baseURL: "https://lunch-backend-production.up.railway.app/api",
});

export const fetchOptions = () => api.get("/options");
export const savePreferences = (data) => api.post("/preferences", data);
export const manageUsers = (action, userData) =>
  api.post(`/users/${action}`, userData);
