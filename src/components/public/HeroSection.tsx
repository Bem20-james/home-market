import { Box, Container, Stack, Typography } from "@mui/material";
import CustomButton from "../CustomButton";
import { FontFamily } from "../../config/fonts";
import { Palette } from "../../config/colors";
import PropertySearchBar from "./PropertySearchBar";

// How far the search bar is pulled up over the bottom edge of the image (px).
const BAR_OVERLAP = 70;

// Section background: top → bottom, primary colour into a neutral.
// Swap GRADIENT_BOTTOM for your own neutral token if you have one.
const GRADIENT_TOP = Palette.primary.light;
const GRADIENT_BOTTOM = "#F5F5F2";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        background: `linear-gradient(180deg, ${GRADIENT_TOP} -50%, ${GRADIENT_BOTTOM} 100%)`,
        position: "relative",
        overflowX: "clip",
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* ── Image panel with headline ── */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: { xs: 0.75, md: 1 },
            height: {
              xs: "clamp(440px, 64svh, 560px)",
              md: "clamp(540px, 74vh, 700px)",
            },
            px: { xs: 2.5, sm: 6 },
            // leave room so the text stays optically centred above the bar
            pb: { xs: 0, md: `${BAR_OVERLAP * 2}px` },
            borderRadius: { xs: "22px", md: "32px" },
            overflow: "hidden",
            backgroundImage: "url('/home/hero.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 24px 60px rgba(0,0,0,0.18)",
            // dark gradient keeps the white text legible on any photo
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(8,12,8,0.45) 0%, rgba(8,12,8,0.55) 45%, rgba(8,12,8,0.80) 100%)",
            },
            "& > *": { position: "relative", zIndex: 1 },
          }}
        >
          <Typography
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            variant="h1"
            sx={{
              fontSize: { xs: "2.75rem", sm: "3.75rem", md: "5rem" },
              fontWeight: { xs: 500, sm: 400, md: 200 },
              fontFamily: FontFamily.primary,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 900,
              color: "#fff",
            }}
          >
            Find your next Property
          </Typography>

          <Typography
            sx={{
              fontFamily: FontFamily.secondary,
              fontSize: { xs: "1.25rem", md: "3.5rem" },
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#5B7496",
            }}
          >
            Verified Agents. No Stress
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.78)",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.5,
              fontWeight: 500,
              maxWidth: 560,
              mt: 0.5,
            }}
          >
            Browse thousands of verified listings directly from landlords and
            skip the hefty commissions.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 1 }}
            sx={{
              width: "100%",
              mt: { xs: 1.5, md: 2 },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton
              to={"/auth/onboarding"}
              shape="rounded"
              variant="primary"
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 4,
                py: 1.75,
                whiteSpace: "nowrap",
              }}
            >
              Explore
            </CustomButton>

            <CustomButton
              to={"/auth/onboarding"}
              shape="rounded"
              variant="accent"
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 4,
                py: 1.75,
                whiteSpace: "nowrap",
              }}
            >
              List Property
            </CustomButton>
          </Stack>
        </Box>

        {/* ── Search bar: straddles the image on desktop, sits below it on small screens ── */}
        <Box
          data-aos="fade-up"
          data-aos-duration="500"
          sx={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2, md: `-${BAR_OVERLAP}px` },
            px: { md: 2 },
          }}
        >
          <PropertySearchBar />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
