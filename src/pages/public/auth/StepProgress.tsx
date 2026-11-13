import { Box, Typography } from "@mui/material";
import { Palette } from "../../../config/colors";

interface Props {
  current: number; // 1-based
  total: number;
  label: string;
}

const StepProgress = ({ current, total, label }: Props) => (
  <Box sx={{ mb: "24px" }}>
    <Box sx={{ display: "flex", gap: "6px", mb: "8px" }}>
      {Array.from({ length: total }).map((_, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            height: 4,
            borderRadius: 2,
            bgcolor: i < current ? Palette.primary.main : "#E6E6E6",
            transition: "background-color 0.25s ease",
          }}
        />
      ))}
    </Box>
    <Typography sx={{ color: "#999", fontSize: "12.5px" }}>
      Step {current} of {total} · {label}
    </Typography>
  </Box>
);

export default StepProgress;
