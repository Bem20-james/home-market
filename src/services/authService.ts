import api from "../api/axios";
import { store } from "../store";

 
export const logoutService = async (refreshToken: string): Promise<void> => {
  await api.post("/auth/logout/", { refreshToken });
};

export const refreshTokenRequest = async () => {
  const refreshToken = store.getState().auth.refreshToken;
  
  console.log("Refresh Token Request - Token present:", !!refreshToken);
  
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }
  
  const response = await api.post("/auth/token/refresh/", {
    refresh: refreshToken,
  });
  
  console.log("Token refreshed successfully");
  return response.data;
};
