import { Box, Typography } from "@mui/material";
import { type ReactNode } from "react";

interface Props {
  error?: string;
  children: ReactNode;
}

/** Wraps an input and shows an error message underneath it. */
const FieldError = ({ error, children }: Props) => (
  <Box>
    {children}
    {error && (
      <Typography
        sx={{ color: "#D32F2F", fontSize: "12px", mt: "4px", ml: "2px" }}
      >
        {error}
      </Typography>
    )}
  </Box>
);

export default FieldError;
