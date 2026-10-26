import { Box, Typography, Avatar, Paper } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";

const HeroCard = () => (
  <Paper
    elevation={0}
    sx={{
      position: "absolute",
      bottom: { md: "-28px", lg: "-28px" },
      left: { md: "-32px", lg: "-150px" },
      zIndex: 10,
      borderRadius: "20px",
      bgcolor: "#f5f5f5",
      p: "18px 22px",
      maxWidth: 250,
      width: "max-content",
      boxShadow: "0px 12px 40px rgba(0,0,0,0.10)",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
      <Avatar
        sx={{
          bgcolor: "#c8f5a0",
          width: 44,
          height: 44,
        }}
      >
        <VerifiedIcon sx={{ color: COLORS.primary, fontSize: 22 }} />
      </Avatar>
      <Box>
        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontWeight: 700,
            fontSize: "15px",
            color: COLORS.dark,
            lineHeight: 1.2,
          }}
        >
          Verified Host
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#888",
            fontFamily: FontFamily.accent,
            lineHeight: 1.3,
          }}
        >
          Background checked
        </Typography>
      </Box>
    </Box>

    {/* Divider */}
    <Box sx={{ borderTop: "1px solid #e0e0e0", mb: 1.5 }} />

    {/* Quote */}
    <Typography
      sx={{
        fontFamily: FontFamily.accent,
        fontStyle: "italic",
        fontSize: "13.5px",
        color: COLORS.dark,
        lineHeight: 1.5,
      }}
    >
      "Moving was so easy without the middleman fees!"
    </Typography>
  </Paper>
);

export default HeroCard;
