import axios from "axios";

const api = axios.create({
  baseURL: "https://your-railway-backend-url.com/api",
});

export const fetchOptions = () => api.get("/options");
export const savePreferences = (data) => api.post("/preferences", data);
export const manageUsers = (action, userData) =>
  api.post(`/users/${action}`, userData);
