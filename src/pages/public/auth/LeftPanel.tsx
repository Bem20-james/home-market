import { Box, Grid, Stack, Typography, alpha } from "@mui/material";
import { Palette } from "../../../config/colors";
import { FontFamily } from "../../../config/fonts";

const LOGIN_HERO_IMAGE = "/auth/login.png";
const STATS = [
  { value: "15k+", label: "Listings" },
  { value: "98%", label: "Verified" },
  { value: "0%", label: "Agent Fees" },
  { value: "16", label: "African Countries" },
];

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
              bgcolor: alpha(Palette.primary.main, 0.72),
              background: `linear-gradient(180deg, ${alpha(
                Palette.primary.dark ?? Palette.primary.main,
                0.55,
              )} 0%, ${alpha(Palette.primary.main, 0.78)} 60%, ${alpha(
                Palette.primary.dark ?? Palette.primary.main,
                0.85,
              )} 100%)`,
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
              color: "#FFFFFF",
              p: { md: 5, lg: 6 },
            }}
          >
            <Box sx={{ maxWidth: 800 }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem", lg: "6rem" },
                  fontWeight: 700,
                  fontFamily: FontFamily.secondary,
                  lineHeight: 1,
                  letterSpacing: "-0.5px",
                  mb: 2,
                }}
              >
                Your gateway
                <br />
                to modern living.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: FontFamily.default,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: alpha("#0D0D0D", 0.88),
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
                      bgcolor: alpha("#0B2E0F", 0.32),
                      borderRadius: "10px",
                      px: 2,
                      py: 1.25,
                      minWidth: 100,
                    }}
                  >
                    <Typography sx={{ fontSize: "3rem", fontWeight: 700 }}>
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
