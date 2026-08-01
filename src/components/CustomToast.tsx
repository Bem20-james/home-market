import { Alert, AlertTitle } from "@mui/material";
export type ToastSeverity = "success" | "error" | "warning" | "info";

interface CustomToastProps {
  title?: string;
  message: string;
  severity?: "success" | "error" | "warning" | "info";
}

const CustomToast = ({
  title,
  message,
  severity = "info", // success | error | warning | info
}: CustomToastProps) => {
  return (
    <Alert
      severity={severity}
      variant="filled"
      sx={{
        minWidth: 320,
        borderRadius: 2,
        fontWeight: 500,
        alignItems: "center",
      }}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
};

export default CustomToast;
