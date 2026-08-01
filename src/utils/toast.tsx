import { toast, type ToastOptions } from "react-toastify";
import { createElement } from "react";
import CustomToast, { type ToastSeverity } from "../components/CustomToast";

const baseConfig: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeButton: false,
  pauseOnHover: true,
};

type ToastHandler = (message: string, title?: string) => void;

interface ShowToast extends Record<ToastSeverity, ToastHandler> {
  success: ToastHandler;
  error: ToastHandler;
  warning: ToastHandler;
  info: ToastHandler;
}

const createToast =
  (severity: ToastSeverity, defaultTitle: string): ToastHandler =>
  (message: string, title: string = defaultTitle): void => {
    toast(createElement(CustomToast, { severity, title, message }), baseConfig);
  };

export const showToast: ShowToast = {
  success: createToast("success", "Success"),
  error: createToast("error", "Error"),
  warning: createToast("warning", "Warning"),
  info: createToast("info", "Info"),
};
