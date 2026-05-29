import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000/api`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(null, (error) => {
  if (error.response?.status === 401 && window.location.pathname !== "/login") {
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

export default api;
