import type { RootState } from "./index";

// Centralizing these means if you ever rename the "user" slice key (it's a
// bit confusingly named - it holds { user, accessToken, refreshToken,
// status }, not just a User object) you only fix it in one place.
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectIsAuthenticated = (state: RootState) =>
  Boolean(state.auth.accessToken);