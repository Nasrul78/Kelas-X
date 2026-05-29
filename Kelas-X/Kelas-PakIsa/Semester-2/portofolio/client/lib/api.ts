import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

// Request interceptor to attach CSRF cookie
api.interceptors.request.use(
  async (config) => {
    try {
      const method = config.method?.toLowerCase();
      // We only fetch the CSRF cookie for state-changing requests
      if (method && ["post", "put", "delete", "patch"].includes(method)) {
        if (
          typeof document !== "undefined" &&
          !document.cookie.includes("XSRF-TOKEN")
        ) {
          await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
          });
        }
      }

      if (typeof document !== "undefined") {
        const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
        if (match) {
          config.headers["X-XSRF-TOKEN"] = decodeURIComponent(match[1]);
        }
      }
    } catch (err) {
      console.error("Failed to initialize CSRF cookie", err);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
