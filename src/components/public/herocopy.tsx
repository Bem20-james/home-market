import { Box, Container, Typography, Grid } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import CustomChip from "../CustomChip";
import PropertySearchBar from "./PropertySearchBar";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: COLORS.light,
          height: "100%",
          pt: { xs: "100px", md: "120px" },
          pb: { xs: 10, md: 16 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(ellipse at top right, rgba(116, 229, 30, 0.44) 0%, transparent 65%)",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "400px",
            height: "300px",
            background:
              "radial-gradient(ellipse at bottom left, rgba(73, 229, 30, 0.65) 0%, transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={{ xs: 5, md: 0 }}
            sx={{ justifyContent: "flex-start", alignItems: "flex-end" }}
          >
            <Grid size={{ xs: 12, md: 6 }} sx={{ mb: { xs: 0, md: 20 } }}>
              <CustomChip label="#1 Direct Housing Platform in Africa" />

              <Typography
                component="h1"
                sx={{
                  fontFamily: FontFamily.primary,
                  fontSize: { xs: "40px", md: "54px", lg: "56px" },
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: COLORS.dark,
                  mt: 3,
                }}
              >
                Find Your Next Home.
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontFamily: FontFamily.primary,
                  fontSize: { xs: "2rem", md: "2.4rem", lg: "2.6rem" },
                  fontWeight: 800,
                  fontStyle: "italic",
                  letterSpacing: "-0.03em",
                  color: COLORS.primary,
                  mb: 2,
                  mt: 0.5,
                }}
              >
                Verified Agent. No Stress.
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: FontFamily.accent,
                  lineHeight: 1.6,
                  color: COLORS.dark,
                  maxWidth: "500px",
                  mb: 3,
                  opacity: 0.8,
                }}
              >
                Browse thousands of verified listings directly from landlords.
                Skip the hefty commissions and move into your dream space faster
                than ever.
              </Typography>

              <Box>
                <PropertySearchBar />
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                position: "relative",
                pb: { xs: 6, md: "28px" },
              }}
            >
              <Box
                component="img"
                src="/home/hero-img.png"
                alt="Modern apartment interior"
                sx={{
                  width: "105%",
                  height: { xs: "auto", md: "auto", lg: "auto" },
                  borderRadius: "30px",
                  display: "block",
                }}
              />

              <HeroCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
