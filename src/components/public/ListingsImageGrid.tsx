import { Box, Container, Typography, IconButton, alpha } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Palette } from "../../config/colors";
import { useState, useCallback } from "react";
import { type GridItem, PAGES } from "./data";

const C = {
  bg: "#F7FAF7",
  brand: Palette.primary.main,
  brandDark: Palette.primary.dark ?? "#2D7A39",
  ink: "#0D1A0F",
  white: "#FFFFFF",
};

// ─── Single grid card ─────────────────────────────────────────────────────────
const GridCard = ({ item }: { item: GridItem }) => (
  <Box
    sx={{
      position: "relative",
      gridRow: item.rowSpan ? `span ${item.rowSpan}` : "span 1",
      borderRadius: "20px",
      overflow: "hidden",
      cursor: "pointer",
      // Image zoom on hover
      "& .card-img": {
        transition: "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      "&:hover .card-img": { transform: "scale(1.08)" },
      // Gradient deepens on hover
      "& .card-overlay": {
        transition: "opacity 0.4s ease",
      },
      "&:hover .card-overlay": { opacity: 1 },
      // CTA slides up on hover
      "& .card-cta": {
        transform: "translateY(12px)",
        opacity: 0,
        transition: "transform 0.35s ease, opacity 0.35s ease",
      },
      "&:hover .card-cta": { transform: "translateY(0)", opacity: 1 },
    }}
  >
    {/* Photo */}
    <Box
      className="card-img"
      component="img"
      src={item.image}
      alt={item.label}
      sx={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />

    {/* Base gradient — always visible for text legibility */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 45%, transparent 100%)",
      }}
    />

    {/* Hover overlay — extra depth */}
    <Box
      className="card-overlay"
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.08) 100%)",
        opacity: 0,
      }}
    />

    {/* Listing count chip — top-left */}
    <Box
      sx={{
        position: "absolute",
        top: 14,
        left: 14,
        bgcolor: alpha(C.white, 0.15),
        backdropFilter: "blur(8px)",
        border: `1px solid ${alpha(C.white, 0.25)}`,
        borderRadius: "20px",
        px: "10px",
        py: "4px",
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <LocationOnRoundedIcon sx={{ fontSize: 11, color: C.white }} />
      <Typography sx={{ fontSize: 11, fontWeight: 600, color: C.white }}>
        {item.sublabel}
      </Typography>
    </Box>

    {/* Bottom content */}
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        p: "18px 20px 20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: item.rowSpan === 2 ? "1.35rem" : "1.05rem",
          color: C.white,
          lineHeight: 1.2,
          mb: 0.75,
          textShadow: "0 1px 6px rgba(0,0,0,0.35)",
        }}
      >
        {item.label}
      </Typography>

      {/* Slide-up CTA */}
      <Box
        className="card-cta"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          bgcolor: C.brand,
          borderRadius: "20px",
          px: "12px",
          py: "5px",
        }}
      >
        <Typography sx={{ fontSize: 11.5, fontWeight: 600, color: C.white }}>
          View Listings
        </Typography>
        <ArrowForwardRoundedIcon sx={{ fontSize: 13, color: C.white }} />
      </Box>
    </Box>
  </Box>
);

// ─── Animated grid wrapper ────────────────────────────────────────────────────
const GridWrapper = ({
  items,
  visible,
}: {
  items: GridItem[];
  visible: boolean;
}) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(2, 220px)",
      gap: "14px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0px)" : "translateY(18px)",
      transition: "opacity 0.48s ease, transform 0.48s ease",
      // When hidden, remove from layout so the transition plays
      position: visible ? "relative" : "absolute",
      inset: visible ? "auto" : 0,
      pointerEvents: visible ? "auto" : "none",
    }}
  >
    {items.map((item) => (
      <GridCard key={item.id} item={item} />
    ))}
  </Box>
);

const ListingsImageGrid = () => {
  const [page, setPage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (transitioning || next === page) return;
      setTransitioning(true);
      // Short delay lets the fade-out complete before swapping content
      setTimeout(() => {
        setPage(next);
        setTransitioning(false);
      }, 300);
    },
    [page, transitioning],
  );

  const prev = () => goTo((page - 1 + PAGES.length) % PAGES.length);
  const next = () => goTo((page + 1) % PAGES.length);

  return (
    <Box component="section" sx={{ bgcolor: C.bg, py: { xs: 7, md: 10 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            mb: { xs: 4, md: 5 },
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: 620 }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
                letterSpacing: "-0.03em",
                lineHeight: 1.18,
                color: C.ink,
              }}
            >
              Verified Property Listings
              <br />
              for Sale &amp; Rent in Nigeria
            </Typography>
          </Box>

          {/* Navigation arrows */}
          <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
            <IconButton
              onClick={prev}
              sx={{
                width: 44,
                height: 44,
                border: `1.5px solid ${alpha(C.ink, 0.14)}`,
                color: C.ink,
                bgcolor: C.white,
                transition: "all 0.22s",
                "&:hover": {
                  bgcolor: C.brand,
                  borderColor: C.brand,
                  color: C.white,
                  transform: "translateX(-2px)",
                },
              }}
            >
              <ArrowBackRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              onClick={next}
              sx={{
                width: 44,
                height: 44,
                border: `1.5px solid ${alpha(C.ink, 0.14)}`,
                color: C.ink,
                bgcolor: C.white,
                transition: "all 0.22s",
                "&:hover": {
                  bgcolor: C.brand,
                  borderColor: C.brand,
                  color: C.white,
                  transform: "translateX(2px)",
                },
              }}
            >
              <ArrowForwardRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Grid — positioned container so hidden grid stays in place */}
        <Box sx={{ position: "relative", minHeight: "calc(2 * 220px + 14px)" }}>
          {PAGES.map((items, i) => (
            <GridWrapper
              key={i}
              items={items}
              visible={i === page && !transitioning}
            />
          ))}
        </Box>

        {/* Dot indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            mt: 4,
          }}
        >
          {PAGES.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: i === page ? 28 : 8,
                height: 8,
                borderRadius: "8px",
                bgcolor: i === page ? C.brand : alpha(C.ink, 0.16),
                cursor: "pointer",
                transition: "width 0.35s ease, background-color 0.35s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ListingsImageGrid;
