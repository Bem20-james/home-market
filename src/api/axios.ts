import axios from "axios";
 import { store } from "../store";
 import { API_BASE_URL } from "../config/paths";
import { setCredentials } from "../store/authSlice";
import { refreshTokenRequest } from "../services/authService";
 
const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const state = store.getState().auth;
  const accessToken = state.accessToken;

  console.log("Request Interceptor - Access Token:", !!accessToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const data = await refreshTokenRequest();

      store.dispatch(
        setCredentials({
          user: store.getState().auth.user!,
          accessToken: data.accessToken,
        }),
      );

      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

      return api(originalRequest);
    }

    return Promise.reject(error);
  },
);

export default api;
