import { Box, Grid, Stack, Typography, alpha } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import { Palette } from "../../../config/colors";
import { FontFamily } from "../../../config/fonts";

const LOGIN_HERO_IMAGE = "/auth/login.png";
const STATS = [
  { value: "15k+", label: "Listings" },
  { value: "98%", label: "Verified" },
];

const LeftPanel = () => {
  const navigate = useNavigate();

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
              justifyContent: "space-between",
              color: "#FFFFFF",
              p: { md: 5, lg: 6 },
            }}
          >
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: 1,
                transition: "opacity 0.2s",
                "&:hover": { opacity: 0.85 },
              }}
            >
              <ApartmentRoundedIcon sx={{ fontSize: 30, color: "#9ED967" }} />
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.2px",
                }}
              >
                Housing Marketplace
              </Typography>
            </Box>

            <Box sx={{ maxWidth: 800 }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { md: "3rem", lg: "5rem" },
                  fontWeight: 700,
                  fontFamily: FontFamily.accent,
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                  mb: 2,
                }}
              >
                Your gateway to
                <br />
                modern living.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: alpha("#FFFFFF", 0.88),
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
                    <Typography sx={{ fontSize: "17px", fontWeight: 700 }}>
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

            <Typography
              sx={{ fontSize: "12.5px", color: alpha("#FFFFFF", 0.75) }}
            >
              © {new Date().getFullYear()} Housing Marketplace. Empowering
              African Real Estate.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LeftPanel;
