import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, 
});


export const loginUser = (credentials) => api.post("/login", credentials);
export const refreshToken = () => api.post("/refresh");
export const logoutUser = () => api.post("/logout");
export const validateToken = (token) => api.get(`/validate-token`, {
  headers: { Authorization: `Bearer ${token}` }
});

export const oauthLogin = (provider) => {
  window.location.href = `http://localhost:8080/oauth2/authorize/${provider}`;
};


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
