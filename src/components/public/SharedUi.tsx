import { useState } from "react";
import { Box, Typography, IconButton, Link, alpha } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { Palette } from "../../config/colors";
import { type BadgeType } from "./data";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { COLORS } from "../../config/colors";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export const Badge = ({ type }: { type: BadgeType }) => (
  <Box
    sx={{
      position: "absolute",
      top: 12,
      left: 12,
      display: "flex",
      alignItems: "center",
      gap: "5px",
      px: "10px",
      py: "5px",
      borderRadius: "20px",
      bgcolor:
        type === "featured" ? Palette.primary.main : "rgba(30,30,30,0.72)",
      backdropFilter: "blur(6px)",
    }}
  >
    <VerifiedRoundedIcon sx={{ fontSize: 13, color: "#fff" }} />
    <Typography
      sx={{ fontSize: 11.5, fontWeight: 600, color: "#fff", lineHeight: 1 }}
    >
      {type === "featured" ? "Featured" : "Verified"}
    </Typography>
  </Box>
);

export const FavButton = () => {
  const [saved, setSaved] = useState(false);
  return (
    <IconButton
      size="small"
      onClick={(e) => {
        e.stopPropagation();
        setSaved((p) => !p);
      }}
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        bgcolor: "#fff",
        width: 32,
        height: 32,
        boxShadow: "0 2px 8px rgba(0,0,0,0.14)",
        "&:hover": { bgcolor: "#fff", transform: "scale(1.1)" },
        transition: "transform 0.18s",
      }}
    >
      {saved ? (
        <FavoriteRoundedIcon sx={{ fontSize: 17, color: "#E53935" }} />
      ) : (
        <FavoriteBorderRoundedIcon sx={{ fontSize: 17, color: "#888" }} />
      )}
    </IconButton>
  );
};

export const Stat = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#888",
        "& svg": { fontSize: 16 },
      }}
    >
      {icon}
    </Box>
    <Typography sx={{ fontSize: 13, color: "#444", lineHeight: 1 }}>
      {label}
    </Typography>
  </Box>
);

export const CtaLink = ({
  label,
  href = "#",
  light = false,
}: {
  label: string;
  href?: string;
  light?: boolean;
}) => (
  <Link
    href={href}
    underline="none"
    className="cta-link"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      color: light ? COLORS.brand : COLORS.brandDark,
      fontWeight: 600,
      fontSize: 14,
      // The arrow slides right on parent card hover
      "& .arrow": {
        display: "inline-flex",
        transition: "transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      "&:hover .arrow": { transform: "translateX(5px)" },
    }}
  >
    {label}
    <span className="arrow">
      <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
    </span>
  </Link>
);

export const IconAvatar = ({
  children,
  dark = false,
  green = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  green?: boolean;
}) => (
  <Box
    sx={{
      width: 46,
      height: 46,
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: dark
        ? alpha("#FFFFFF", 0.1)
        : green
          ? alpha(COLORS.dark, 0.12)
          : alpha(COLORS.brand, 0.1),
      color: dark ? COLORS.brand : green ? COLORS.dark : COLORS.brandDark,
      flexShrink: 0,
      "& svg": { fontSize: 22 },
    }}
  >
    {children}
  </Box>
);

export const Stars = ({ count }: { count: number }) => (
  <Box sx={{ display: "flex", gap: "2px", mb: 1.5 }}>
    {Array.from({ length: count }).map((_, i) => (
      <StarRoundedIcon key={i} sx={{ fontSize: 16, color: "#F59E0B" }} />
    ))}
  </Box>
);
