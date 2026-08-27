import { Box, Container, Typography, Grid } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import { CustomChip } from "../../components";

const AboutSection = () => {
  return (
    <Box
      sx={{
        bgcolor: COLORS.light,
        pt: { xs: "100px", md: "132px" },
        pb: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 8, md: 4 }}
          sx={{ alignItems: "center" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: "420px", md: "none" },
                mx: { xs: "auto", md: 0 },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-15%",
                  right: "-10%",
                  width: "70%",
                  height: "70%",
                  background:
                    "radial-gradient(ellipse, rgba(116, 229, 30, 0.35) 0%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 0,
                },
              }}
            >
              <Box
                component="img"
                src="/about/hero.jpg"
                alt="Members of the team behind the platform"
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: "18px",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              {/* Floating verified badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: "6%",
                  right: { xs: "4%", md: "-8%" },
                  zIndex: 3,
                  bgcolor: COLORS.dark,
                  borderRadius: "16px",
                  px: 2.5,
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.25,
                  boxShadow: "0 14px 28px rgba(0,0,0,0.18)",
                  maxWidth: "190px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: FontFamily.accent,
                    fontSize: "0.78rem",
                    lineHeight: 1.35,
                    color: "#fff",
                  }}
                >
                  Every agent ID-checked before they list
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Box sx={{ mb: 3 }}>
              <CustomChip label="Our Vision" />
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", sm: "4rem", md: "4rem" },
                fontWeight: 600,
                color: COLORS.black,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                fontFamily: FontFamily.secondary,
              }}
            >
              Driven by Trust
            </Typography>

            <Typography
              component="p"
              sx={{
                fontFamily: FontFamily.mono,
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 800,
                fontStyle: "normal",
                letterSpacing: "-0.01em",
                color: COLORS.primary,
                mb: 2,
              }}
            >
              Powered by Technology
            </Typography>

            <Typography
              sx={{
                fontSize: "1.05rem",
                fontFamily: FontFamily.accent,
                lineHeight: 1.7,
                color: COLORS.dark,
                opacity: 0.75,
                mb: 5,
              }}
            >
              The Housing Marketplace was born out of frustration. For too long,
              renting or buying property in major African cities meant
              navigating a maze of unverified listings, phantom properties, and
              exorbitant, non-refundable agency fees.
            </Typography>

            <Typography
              sx={{
                fontSize: "1.05rem",
                fontFamily: FontFamily.accent,
                lineHeight: 1.7,
                color: COLORS.dark,
                opacity: 0.75,
              }}
            >
              We believed there had to be a better way. By combining rigorous
              physical verification with a seamless digital platform, we've
              created an ecosystem where transparency is the default, not the
              exception. Our proprietary vetting process ensures that what you
              see online is exactly what you get offline, enabling a truly "No
              Agent, No Stress" experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
