import { Box, Container, Typography, Stack } from "@mui/material";
import { COLORS } from "../../config/colors";
import CustomChip from "../CustomChip";
import { FontFamily } from "../../config/fonts";
import CustomButton from "../CustomButton";

const BG_IMAGE = "/about/bg.jpg";

const MissionSection = () => (
  <Box
    component="section"
    sx={{
      position: "relative",
      bgcolor: COLORS.light,
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* ── Background cityscape — heavily washed to near-invisible ── */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        mixBlendMode: "multiply",
        opacity: 0.1,
        zIndex: 0,
      }}
    />

    <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
      <Box
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        sx={{ mb: 3, display: "inline-flex", alignItems: "center" }}
      >
        <CustomChip label="Our Mission" />
      </Box>

      <Typography
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        component="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
          fontFamily: FontFamily.default,
          letterSpacing: "-0.03em",
          lineHeight: 1.18,
          color: COLORS.ink,
          mb: { xs: 3, md: 4 },
        }}
      >
        Modernizing Real
        <br />
        Estate Across &nbsp;
        <Box
          component="span"
          sx={{
            position: "relative",
            display: "inline-block",
            fontFamily: FontFamily.primary,
            fontSize: { xs: "2rem", md: "2.4rem", lg: "5rem" },
            fontWeight: 700,
            fontStyle: "normal",
            letterSpacing: "-0.03em",
            color: COLORS.default,
            mb: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "-6px",
              height: "6px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8' preserveAspectRatio='none'%3E%3Cpath d='M0 5 Q25 1 50 5 Q75 9 100 5 Q125 1 150 5 Q175 9 200 5' stroke='${encodeURIComponent(COLORS.brand)}' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            },
          }}
        >
          Africa
        </Box>
      </Typography>

      <Typography
        data-aos="fade-up"
        data-aos-duration="500"
        sx={{
          fontSize: { xs: 15, md: 16.5 },
          lineHeight: 1.78,
          color: COLORS.textMuted,
          maxWidth: 620,
          mx: "auto",
        }}
      >
        We are building the trust layer for African real estate. By eliminating
        predatory agent fees and verifying every listing through technology, we
        make finding your next home as simple as booking a flight.
      </Typography>

      <Stack
        data-aos="fade-up"
        data-aos-duration="500"
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
    </Container>
  </Box>
);

export default MissionSection;
