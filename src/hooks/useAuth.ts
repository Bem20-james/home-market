import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { logoutService } from "../services/authService";
import { logout } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

export const useLogout = (): UseMutationResult<void, AxiosError, void> => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const refreshToken = useAppSelector((state) => state.auth.refreshToken);

  return useMutation<void, AxiosError, void>({
    mutationFn: async () => {
      if (refreshToken) {
        await logoutService(refreshToken);
      }
    },

    // onSettled (not onSuccess/onError separately) is the right call here:
    // client-side state gets cleared whether or not the API call succeeds,
    // so a network blip or an already-expired session can't strand the
    // user in a logged-in-looking UI with no working session.
    onSettled: () => {
      handleClientCleanup();
    },
  });

  function handleClientCleanup() {
    dispatch(logout());

    // No manual localStorage cleanup needed here - redux-persist
    // automatically re-persists the nulled-out state as soon as
    // dispatch(logout()) runs, since it's subscribed to the store.

    queryClient.clear();

    navigate("/login", { replace: true });
  }
};