import axios from "axios";

const api = axios.create({
  baseURL: "https://lunch-backend-production.up.railway.app/api",
});

// Fetch lunch options
export const fetchOptions = () => api.get("/options");

// Save user preferences
export const savePreferences = (data) => api.post("/preferences", data);

// Save admin options for lunches
export const saveOptions = (data) => api.post("/options", data);

// Export user choices (e.g., to download as a file)
export const exportChoices = () => api.get("/choices/export");

// Manage users (create, delete, etc.)
export const manageUsers = (action, userData) =>
  api.post(`/users/${action}`, userData);
