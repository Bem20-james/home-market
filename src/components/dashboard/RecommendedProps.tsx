import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteRounded from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";
import BedOutlined from "@mui/icons-material/BedOutlined";
import BathtubOutlined from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlined from "@mui/icons-material/SquareFootOutlined";
import ApartmentRounded from "@mui/icons-material/ApartmentRounded";

export interface Property {
  id: number;
  title: string;
  image?: string;
  price: string;
  period?: string;
  beds: number;
  baths: number;
  sqft: number;
  verified?: boolean;
  saved?: boolean;
}

interface Props {
  properties: Property[];
  onSeeMore?: () => void;
  onQuickBook?: (property: Property) => void;
}

export default function RecommendedProperties({
  properties,
  onSeeMore,
  onQuickBook,
}: Props) {
  const [saved, setSaved] = useState<Set<number>>(
    () => new Set(properties.filter((p) => p.saved).map((p) => p.id)),
  );

  const toggleSaved = (id: number) =>
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <Box component="section" aria-labelledby="recommended-heading">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          id="recommended-heading"
          component="h2"
          sx={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}
        >
          Recommended for you
        </Typography>
        <Button
          size="small"
          color="inherit"
          onClick={onSeeMore}
          sx={{ color: "text.secondary" }}
        >
          See more
        </Button>
      </Box>

      <Stack spacing={2}>
        {properties.map((p) => {
          const isSaved = saved.has(p.id);
          return (
            <Paper
              key={p.id}
              variant="outlined"
              sx={{
                borderRadius: 2,
                borderColor: "divider",
                overflow: "hidden",
                "&:hover img": { transform: "scale(1.03)" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  bgcolor: "#E2E8F0",
                  overflow: "hidden",
                }}
              >
                {p.image ? (
                  <Box
                    component="img"
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform .5s",
                    }}
                  />
                ) : (
                  <ApartmentRounded
                    sx={{
                      position: "absolute",
                      inset: 0,
                      m: "auto",
                      fontSize: 48,
                      color: "#CBD5E1",
                    }}
                  />
                )}

                {/* bottom gradient so the badge stays legible */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: "auto 0 0 0",
                    height: 80,
                    background:
                      "linear-gradient(to top, rgba(15,27,45,.4), transparent)",
                  }}
                />

                <IconButton
                  onClick={() => toggleSaved(p.id)}
                  aria-pressed={isSaved}
                  aria-label={
                    isSaved ? `Remove ${p.title} from saved` : `Save ${p.title}`
                  }
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    bgcolor: "rgba(255,255,255,.92)",
                    "&:hover": { bgcolor: "#fff" },
                  }}
                >
                  {isSaved ? (
                    <FavoriteRounded
                      fontSize="small"
                      sx={{ color: "#F43F5E" }}
                    />
                  ) : (
                    <FavoriteBorderRounded
                      fontSize="small"
                      sx={{ color: "text.secondary" }}
                    />
                  )}
                </IconButton>

                {p.verified && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 12,
                      bottom: 12,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      px: 1.25,
                      py: 0.5,
                      borderRadius: 99,
                      bgcolor: "rgba(255,255,255,.95)",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    <VerifiedRounded sx={{ fontSize: 15, color: "#059669" }} />
                    Verified
                  </Box>
                )}
              </Box>

              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 1.5,
                  }}
                >
                  <Typography noWrap sx={{ fontWeight: 700 }}>
                    {p.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      flexShrink: 0,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {p.price}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: "text.disabled",
                      }}
                    >
                      {p.period ?? "/mo"}
                    </Typography>
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mt: 1, color: "text.secondary", fontSize: 14 }}
                >
                  <Spec
                    icon={<BedOutlined sx={{ fontSize: 18 }} />}
                    label="Bedrooms"
                    value={p.beds}
                  />
                  <Spec
                    icon={<BathtubOutlined sx={{ fontSize: 18 }} />}
                    label="Bathrooms"
                    value={p.baths}
                  />
                  <Spec
                    icon={<SquareFootOutlined sx={{ fontSize: 18 }} />}
                    label="Area"
                    value={`${p.sqft} sqft`}
                  />
                </Stack>

                <Button
                  fullWidth
                  variant="outlined"
                  color="inherit"
                  onClick={() => onQuickBook?.(p)}
                  sx={{
                    mt: 2,
                    py: 1.1,
                    borderRadius: 1.5,
                    borderColor: "divider",
                    "&:hover": {
                      bgcolor: "#0F1B2D",
                      color: "#fff",
                      borderColor: "#0F1B2D",
                    },
                  }}
                >
                  Quick book
                </Button>
              </Box>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
      title={label}
      aria-label={`${label}: ${value}`}
    >
      {icon}
      <span>{value}</span>
    </Box>
  );
}
