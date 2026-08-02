import { Box, Container, Typography, Grid } from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import { CustomChip, HeroCard } from "../../../components";

// Small inline check icon for the "verified" badge — avoids pulling in an
// icon library for a single glyph.
const CheckIcon = ({ size = 16, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M5 13l4 4L19 7"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// The three things worth knowing about the platform, told as a sentence-style
// stat row rather than dashboard cards — quieter, and reads like a claim
// being made rather than a metric being reported.
const stats = [
  { value: "40,000+", label: "people housed" },
  { value: "12,000+", label: "verified listings" },
  { value: "6", label: "cities across Africa" },
];

const AboutPage = () => {
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
            size={{ xs: 12, md: 7 }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Box sx={{ mb: 3 }}>
              <CustomChip label="About Us" />
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", sm: "4rem", md: "4rem" },
                fontWeight: 600,
                color: COLORS.black,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                maxWidth: "1100px",
                fontFamily: FontFamily.secondary,
              }}
            >
              We are rebuilding
              <Box
                component="span"
                sx={{ display: { xs: "inline", md: "none" } }}
              >
                &nbsp;
              </Box>
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              <Box component="span" sx={{ color: COLORS.bg }}>
                how Africa finds home.
              </Box>
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
              Direct. Verified. Yours.
            </Typography>

            <Typography
              sx={{
                fontSize: "1.05rem",
                fontFamily: FontFamily.accent,
                lineHeight: 1.7,
                color: COLORS.dark,
                opacity: 0.75,
                maxWidth: "480px",
                mb: 5,
              }}
            >
              It started as frustration with brokers, fake photos, and listings
              that led nowhere. Today we connect renters straight with landlords
              and ID-verified agents — so every home you see is one you can
              actually move into.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                rowGap: 3,
                columnGap: { xs: 4, md: 5 },
              }}
            >
              {stats.map((stat, i) => (
                <Box
                  key={stat.label}
                  sx={{
                    pl: i === 0 ? 0 : { xs: 0, sm: 4 },
                    borderLeft: {
                      xs: "none",
                      sm: i === 0 ? "none" : `1px solid ${COLORS.dark}22`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: FontFamily.primary,
                      fontSize: { xs: "1.5rem", md: "1.7rem" },
                      fontWeight: 700,
                      color: COLORS.dark,
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: FontFamily.accent,
                      fontSize: "0.85rem",
                      color: COLORS.dark,
                      opacity: 0.6,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            data-aos="fade-left"
            data-aos-offset="300"
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
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  borderRadius: "28px",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  aspectRatio: "4 / 3",
                  display: "block",
                  position: "absolute",
                  left: { xs: "-6%", md: "-12%" },
                  bottom: "3%",
                  zIndex: 2,
                }}
              >
                <HeroCard />
              </Box>

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
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: COLORS.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon size={14} />
                </Box>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
