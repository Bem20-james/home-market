import axios from "axios";
import { API_BASE_URL } from "../config/paths";
import { useDispatch } from "react-redux";
import { showToast } from "../utils/toast";
import { useUserContext } from "../contexts";
import { logout } from "../store/authSlice";

function useLogout() {
  const { config } = useUserContext();
  const dispatch = useDispatch();

  return async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/logout-user`,
        {},
        config,
      );

      const result = response?.data;
      dispatch(logoutUser());
      if (result.code === 0) {
        return true;
      }
      return false;
    } catch (error) {
      dispatch(logout());
      const errorMessage =
        error?.response?.data?.message || "Logout failed, please try again.";

      console.error("Logout error:", errorMessage);
      showToast.error(errorMessage);

      return false;
    }
  };
}

export { useLogout };
