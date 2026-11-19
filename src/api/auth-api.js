import { api } from "../lib/api";

// Register
export const registerRequest = async (formData) => {
  const response = await api.post("/auth/register", formData);
  return response.data;
};

// Login
export const loginRequest = async (formData) => {
  const response = await api.post("/auth/login", formData);
  return response.data;
};

// Get Current User
export const getMeRequest = async (token) => {
  const response = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};