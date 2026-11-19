const TOKEN_KEY = "sairna_access_token";

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);

  window.dispatchEvent(new Event("authChanged"));
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);

  window.dispatchEvent(new Event("authChanged"));
};