import { Box, Stack, Typography } from "@mui/material";
import { Palette } from "../../../config/colors";
import { type StepProps } from "../../../types/authTypes";
import { OPTIONS } from "./data";

const RoleStep = ({ data, errors, onChange }: StepProps) => (
  <Stack sx={{ gap: 2 }}>
    {OPTIONS.map(({ group, items }) => (
      <Box key={group}>
        <Typography
          sx={{ color: "#666", fontSize: "13px", fontWeight: 600, mb: 1 }}
        >
          {group}
        </Typography>
        <Stack sx={{ gap: 1.25 }}>
          {items.map((opt) => {
            const selected = data.role === opt.value;
            return (
              <Box
                key={opt.value}
                role="radio"
                aria-checked={selected}
                tabIndex={0}
                onClick={() => onChange("role", opt.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onChange("role", opt.value);
                  }
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.75,
                  p: 1.75,
                  cursor: "pointer",
                  borderRadius: "12px",
                  border: "1.5px solid",
                  borderColor: selected ? Palette.primary.main : "#E0E0E0",
                  bgcolor: "#FFFFFF",
                  transition: "border-color 0.15s ease",
                  "&:hover": {
                    borderColor: selected ? Palette.primary.main : "#C8C8C8",
                  },
                  "&:focus-visible": {
                    outline: `2px solid ${Palette.primary.main}`,
                    outlineOffset: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    p: 1.25,
                    borderRadius: "10px",
                    color: selected ? "#FFFFFF" : Palette.primary.main,
                    bgcolor: selected ? Palette.primary.main : "#F3F4F6",
                    transition: "all 0.15s ease",
                  }}
                >
                  {opt.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "#0D0D0D", fontWeight: 600, fontSize: "15px" }}
                  >
                    {opt.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#888", fontSize: "13px", lineHeight: 1.4 }}
                  >
                    {opt.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    ))}
    {errors.role && (
      <Typography sx={{ color: "#D32F2F", fontSize: "12px" }}>
        {errors.role}
      </Typography>
    )}
  </Stack>
);

export default RoleStep;
