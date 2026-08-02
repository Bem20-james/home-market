import { Box, Typography, Avatar, alpha } from "@mui/material";
import { COLORS } from "../../config/colors";
import { TESTIMONIALS } from "./data";
import { Stars } from "./SharedUi";

const TestimonialCard = ({
  item,
  active,
}: {
  item: (typeof TESTIMONIALS)[0];
  active: boolean;
}) => (
  <Box
    sx={{
      bgcolor: COLORS.white,
      borderRadius: "18px",
      p: { xs: "20px 22px", md: "24px 28px" },
      border: `1.5px solid ${active ? alpha(COLORS.brand, 0.35) : "transparent"}`,
      boxShadow: active
        ? `0 8px 32px ${alpha(COLORS.brandDark, 0.12)}`
        : "0 1px 4px rgba(0,0,0,0.04)",
      opacity: active ? 1 : 0.38,
      transform: active ? "scale(1)" : "scale(0.97)",
      filter: active ? "none" : "blur(0.4px)",
      transition:
        "opacity 0.55s ease, transform 0.55s ease, box-shadow 0.55s ease, border-color 0.55s ease, filter 0.55s ease",
      pointerEvents: active ? "auto" : "none",
    }}
  >
    <Stars count={item.stars} />

    <Typography
      sx={{
        fontSize: { xs: 14, md: 15 },
        lineHeight: 1.72,
        color: active ? COLORS.ink : COLORS.inkMuted,
        mb: 2.5,
        transition: "color 0.55s ease",
      }}
    >
      &ldquo;{item.quote}&rdquo;
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Avatar
        src={item.avatar}
        alt={item.name}
        sx={{
          width: 42,
          height: 42,
          border: `2px solid ${active ? COLORS.brand : "transparent"}`,
          transition: "border-color 0.55s ease",
        }}
      />
      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: 14, color: COLORS.ink }}>
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: 12.5, color: COLORS.inkMuted }}>
          {item.role}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default TestimonialCard;
