import { Box, Grid, Stack, Typography, alpha } from "@mui/material";
import { Palette } from "../../../config/colors";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";

const LOGIN_HERO_IMAGE = "/auth/auth.jpg";
const STATS = [
  { value: "10k+", label: "Listings" },
  { value: "98%", label: "Verified" },
  { value: "0%", label: "Agent Fees" },
  { value: "9", label: "African Countries" },
];

// Semi-transparent so the photo shows through the gradient.
// Lower the alpha values to reveal more of the photo.
const GRADIENT_TOP = alpha(Palette.primary.light, 0.75);
const GRADIENT_BOTTOM = alpha(COLORS.primary, 0.5);

const LeftPanel = () => {
  return (
    <Grid size={{ xs: 0, md: 7 }} sx={{ display: { xs: "none", md: "flex" } }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          p: "8px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Hero photo — replace LOGIN_HERO_IMAGE above */}
          <Box
            component="img"
            src={LOGIN_HERO_IMAGE}
            alt=""
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Brand-tint overlay so copy stays legible over any photo */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(180deg, ${GRADIENT_TOP} -50%, ${GRADIENT_BOTTOM} 100%)`,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: COLORS.white,
              p: { md: 5, lg: 6 },
            }}
          >
            <Box sx={{ maxWidth: 800 }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem", lg: "6rem" },
                  fontWeight: 300,
                  fontFamily: FontFamily.primary,
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                Your gateway
                <br />
                to modern living.
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontFamily: FontFamily.default,
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: alpha(COLORS.neutral, 0.88),
                  mb: 3.5,
                }}
              >
                Connect with premium properties and verified landlords across
                the continent&apos;s most vibrant urban centers.
              </Typography>

              <Stack direction="row" spacing={1.5}>
                {STATS.map((stat) => (
                  <Box
                    key={stat.label}
                    sx={{
                      bgcolor: alpha(COLORS.primary, 0.52),
                      borderRadius: "10px",
                      px: 2,
                      py: 1.25,
                      minWidth: 100,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "3rem",
                        fontWeight: 700,
                        fontFamily: FontFamily.primary,
                        color: COLORS.white,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12.5px",
                        color: alpha("#FFFFFF", 0.85),
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LeftPanel;
