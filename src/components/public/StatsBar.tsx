import { Box, Typography, Divider, Stack } from "@mui/material";
import { keyframes } from "@mui/material/styles";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";

const stats = [
  { value: "10k+", label: "Active Listings" },
  { value: "24hr", label: "Fast Response" },
  { value: "100%", label: "Verified Owners" },
  { value: "No", label: "Agent Fees" },
  { value: "4.9/5", label: "User Rating" },
];

// Moves the track by exactly one copy of the list (the track holds two copies),
// so the loop restarts seamlessly.
const marquee = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

function StatContent({ value, label }: { value: string; label: string }) {
  return (
    <>
      <Typography
        component="span"
        sx={{
          fontFamily: FontFamily.secondary,
          fontWeight: 700,
          fontSize: { xs: 18, md: 20 },
          color: COLORS.primary,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </Typography>
      <Typography
        component="span"
        sx={{
          fontSize: { xs: 14, md: 15 },
          fontWeight: 600,
          color: "#5a5a5a",
          whiteSpace: "nowrap",
          fontFamily: FontFamily.primary,
        }}
      >
        {label}
      </Typography>
    </>
  );
}

export default function StatsBar() {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.neutral,
        py: { xs: 3, md: 5 },
        px: { xs: 0, md: 8 },
      }}
    >
      {/* Desktop: unchanged row layout */}
      <Stack
        direction="row"
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          mx: "auto",
        }}
        divider={
          <Divider
            flexItem
            orientation="vertical"
            sx={{ borderColor: "rgba(0,0,0,0.08)" }}
          />
        }
      >
        {stats.map((stat) => (
          <Box
            key={stat.label}
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: 1,
              flex: 1,
              justifyContent: "center",
              minWidth: 0,
              transition: "transform 0.2s ease",
              "&:hover": { transform: "translateY(-2px)" },
            }}
          >
            <StatContent value={stat.value} label={stat.label} />
          </Box>
        ))}
      </Stack>

      {/* Mobile: infinite horizontal marquee */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          overflow: "hidden",
          // soft fade at both edges
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          "@media (prefers-reduced-motion: reduce)": {
            overflowX: "auto",
            maskImage: "none",
            WebkitMaskImage: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: `${marquee} 22s linear infinite`,
            "&:hover, &:active": { animationPlayState: "paused" },
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        >
          {/* Two copies so the loop is seamless; the second is hidden from screen readers */}
          {[0, 1].map((copy) => (
            <Box
              key={copy}
              aria-hidden={copy === 1 || undefined}
              sx={{ display: "flex", flexShrink: 0 }}
            >
              {stats.map((stat) => (
                <Box
                  key={`${copy}-${stat.label}`}
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                    flexShrink: 0,
                    // padding (not gap) so both copies are exactly equal width
                    pl: 3,
                    pr: 3,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "1px",
                      height: 20,
                      backgroundColor: "rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <StatContent value={stat.value} label={stat.label} />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
