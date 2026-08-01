import { Box, Typography } from "@mui/material";
import { FontFamily } from "../config/fonts";
import { COLORS } from "../config/colors";
import { type ReactNode } from "react";

interface CustomChipProps {
  label: string;
  icon?: ReactNode;
}

const CustomChip = ({ label, icon }: CustomChipProps) => {
  return (
    <Box
      sx={{
        backgroundColor: `${COLORS.primary}70`,
        padding: "5px 10px",
        borderRadius: "20px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {icon && <Box sx={{ display: "flex", color: COLORS.dark }}>{icon}</Box>}

      <Typography
        sx={{
          fontFamily: FontFamily.primary,
          fontWeight: 800,
          fontSize: ".7rem",
          color: COLORS.background,
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CustomChip;
