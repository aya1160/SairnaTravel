import { api } from "../lib/api";

export const getCities = async () => {
  const response = await api.get("/cities");
  return response.data;
};