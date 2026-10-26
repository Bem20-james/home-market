import { Box, Container, Typography, Grid, alpha } from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import { CustomChip, HeroCard } from "../../../components/public";
import {
  MissionsSection,
  AboutSection,
  FAQSection,
} from "../../../components/public";
import {
  PeopleRounded,
  SecurityRounded,
  VisibilityRounded,
} from "@mui/icons-material";

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

const stats = [
  { value: "40k+", label: "people housed" },
  { value: "12k+", label: "verified listings" },
  { value: "16", label: "cities across Africa" },
];

const values = [
  {
    id: "1",
    icon: <VisibilityRounded />,
    title: "Transparency",
    subtitle:
      " No hidden fees, no phantom listings. We believe in clear, upfront information at every step of your journey.",
  },
  {
    id: "2",
    icon: <PeopleRounded />,
    title: "Inclusion",
    subtitle:
      " Making quality housing accessible to everyone. We're building a platform that serves diverse communities fairly.",
  },
  {
    id: "3",
    icon: <SecurityRounded />,
    title: "Security",
    subtitle:
      "Your trust is our most valuable asset. From data protection to physical verifications, security is built into our DNA.",
  },
];

const AboutPage = () => {
  return (
    <>
      <MissionsSection />

      <Box
        sx={{
          bgcolor: COLORS.neutral,
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
                  fontSize: { xs: "4rem", sm: "4rem", md: "3rem" },
                  fontWeight: 300,
                  color: COLORS.dark,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  maxWidth: "1100px",
                  fontFamily: FontFamily.primary,
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
                  fontFamily: FontFamily.secondary,
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
                  color: COLORS.tertiary,
                  opacity: 0.75,
                  maxWidth: "480px",
                  mb: 5,
                }}
              >
                It started as frustration with brokers, fake photos, and
                listings that led nowhere. Today we connect renters straight
                with landlords and ID-verified agents — so every home you see is
                one you can actually move into.
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
                        sm: i === 0 ? "none" : `1px solid ${COLORS.tertiary}22`,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: FontFamily.primary,
                        fontSize: { xs: "1.5rem", md: "1.7rem" },
                        fontWeight: 700,
                        color: COLORS.tertiary,
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: FontFamily.accent,
                        fontSize: "0.85rem",
                        color: COLORS.tertiary,
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
                    bgcolor: COLORS.tertiary,
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

      <AboutSection />
      <Box
        sx={{
          bgcolor: COLORS.neutral,
          pt: { xs: "100px", md: "132px" },
          pb: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth={"lg"}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 7 } }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.85rem", md: "3.5rem" },
                fontFamily: FontFamily.primary,
                letterSpacing: "-0.03em",
                color: COLORS.ink,
                mb: 1.25,
              }}
            >
              Core Values
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                color: COLORS.textMuted,
                maxWidth: 550,
                mx: "auto",
              }}
            >
              The principles that guide our mission to reshape the real estate
              landscape.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {values.map(({ id, icon, title, subtitle }) => (
              <Grid
                key={id}
                size={{ xs: 12, sm: 4, md: 4 }}
                sx={{
                  bgcolor: alpha(COLORS.neutral, 0.7),
                  p: 4,
                  borderRadius: 6,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      height: 40,
                      width: 40,
                      bgcolor: COLORS.accentL,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    {icon}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: FontFamily.primary,
                      fontSize: {
                        lg: "1.5rem",
                        sm: "2rem",
                        xs: "1.5rem",
                      },
                      fontWeight: 600,
                      letterSpacing: -0.3,
                      lineHeight: 2,
                    }}
                  >
                    {title}
                  </Typography>

                  <Typography>{subtitle}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <FAQSection />
    </>
  );
};

export default AboutPage;
