import { useState } from "react";
import { Box, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { Palette } from "../../../config/colors";
import CustomInput from "../../../components/CustomInput";
import type { StepProps } from "../../../types/authTypes";
import FieldError from "../../../components/FieldError";

const PasswordStep = ({ data, errors, onChange }: StepProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggle = (
    <Box
      component="span"
      onClick={() => setShowPassword((prev) => !prev)}
      sx={{ display: "flex", cursor: "pointer" }}
    >
      {showPassword ? (
        <VisibilityOffRoundedIcon sx={{ color: "#9AA0A6" }} />
      ) : (
        <VisibilityRoundedIcon sx={{ color: "#9AA0A6" }} />
      )}
    </Box>
  );

  return (
    <Stack sx={{ gap: 2 }}>
      <FieldError error={errors.password}>
        <CustomInput
          label="Password"
          fullWidth
          placeholder="At least 8 characters"
          type={showPassword ? "text" : "password"}
          startIcon={<LockOutlinedIcon sx={{ color: "#9AA0A6" }} />}
          endIcon={toggle}
          value={data.password}
          onChange={(e) => onChange("password", e.target.value)}
          iconColor={Palette.primary.main}
          variant="outlined"
        />
      </FieldError>

      <FieldError error={errors.confirmPassword}>
        <CustomInput
          label="Confirm password"
          fullWidth
          placeholder="Enter your password again"
          type={showPassword ? "text" : "password"}
          startIcon={<LockOutlinedIcon sx={{ color: "#9AA0A6" }} />}
          endIcon={toggle}
          value={data.confirmPassword}
          onChange={(e) => onChange("confirmPassword", e.target.value)}
          iconColor={Palette.primary.main}
          variant="outlined"
        />
      </FieldError>
    </Stack>
  );
};

export default PasswordStep;
