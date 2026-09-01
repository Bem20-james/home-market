import { Box, Container, Typography, Stack } from "@mui/material";
import CustomButton from "../CustomButton";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import PropertySearchBar from "./PropertySearchBar";

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: COLORS.light,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
        pb: { xs: "180px", sm: "200px", md: "150px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: -330,
          height: "100%",
          width: { xs: "100%", md: "50%" },
          backgroundImage: "url('/home/hero2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "80%",
          backgroundPosition: "right -100px bottom -90px",
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: { xs: "100%", md: "45%" },
          backgroundImage: "url('/home/hero1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "80%",
          backgroundPosition: "left -90px bottom -80px",
          opacity: 0.2,
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={4}
          sx={{ alignItems: "center", textAlign: "center", mt: 15 }}
        >
          <Typography
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", sm: "4rem", md: "5rem" },
              fontWeight: 700,
              fontFamily: FontFamily.default,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "1100px",
              color: COLORS.dark,
            }}
          >
            Find your next Property
            <Box
              component="span"
              sx={{
                display: { xs: "inline", md: "none" },
              }}
            >
              &nbsp;
            </Box>
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            <Box
              component="span"
              sx={{
                fontFamily: FontFamily.default,
                fontSize: { xs: "2rem", md: "2.4rem", lg: "4rem" },
                fontWeight: 700,
                fontStyle: "normal",
                letterSpacing: "-0.03em",
                color: COLORS.default,
                mb: 2,
              }}
            >
              Verified Agents. No Stress
            </Box>
          </Typography>

          <Box data-aos="fade-up" data-aos-duration="500">
            <Stack
              direction={"column"}
              spacing={2}
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: `${COLORS.secondary}90`,
                  fontSize: { xs: "1rem", md: "1rem" },
                  lineHeight: 1.6,
                  maxWidth: "520px",
                  fontWeight: 500,
                }}
              >
                Browse thousands of verified listings directly from landlords.
                Skip the hefty commissions and move into your dream space faster
                than ever.
              </Typography>
              <Box>
                <PropertySearchBar />
              </Box>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{
                width: "100%",
                mt: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomButton
                to={"/auth/onboarding"}
                shape="rounded"
                variant="success"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  px: 3,
                  py: 2,
                  whiteSpace: "nowrap",
                }}
              >
                List Property
              </CustomButton>
              <CustomButton
                to={"/auth/onboarding"}
                shape="rounded"
                fullWidth
                variant="secondary"
                sx={{
                  mt: "auto",
                  width: { xs: "100%", sm: "auto" },
                  px: 3,
                  py: 2,
                }}
                onClick={() => {}}
              >
                Explore Listings
              </CustomButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
