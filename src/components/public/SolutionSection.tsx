import { Box, Container, Grid, Typography, Stack, alpha } from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import { COLORS } from "../../config/colors";
import { IconAvatar, CtaLink } from "./SharedUi";
import { FontFamily } from "../../config/fonts";

// ─── Shared card base styles ──────────────────────────────────────────────────
const cardBase = {
  borderRadius: "20px",
  p: { xs: 3, md: 4 },
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition:
    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
  border: "2px solid transparent",
};

const TenantsCard = () => (
  <Box
    sx={{
      ...cardBase,
      bgcolor: COLORS.white,
      boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
      // Hover: dark brand border + gentle lift
      "&:hover": {
        borderColor: COLORS.dark,
        transform: "translateY(-4px)",
        boxShadow: `0 16px 40px ${alpha(COLORS.dark, 0.14)}`,
        // Forward the CTA arrow on card hover
        "& .cta-link .arrow": { transform: "translateX(5px)" },
      },
    }}
  >
    <IconAvatar>
      <PersonOutlineRoundedIcon />
    </IconAvatar>

    <Typography
      component="h3"
      sx={{
        fontWeight: 700,
        fontSize: { xs: "1.5rem", md: "1.75rem" },
        color: COLORS.ink,
        mt: 3,
        mb: 1.5,
        letterSpacing: "-0.02em",
      }}
    >
      For Tenants
    </Typography>

    <Typography
      sx={{
        fontSize: 15,
        lineHeight: 1.65,
        color: COLORS.inkMuted,
        mb: "auto",
        pb: 3,
      }}
    >
      Find your perfect sanctuary. Filter by commute time, amenities, and verify
      landlords before you pay a dime.
    </Typography>

    <CtaLink label="Explore for Tenants" href="/tenants" />
  </Box>
);

const LandlordsCard = () => (
  <Box
    sx={{
      ...cardBase,
      bgcolor: COLORS.dark,
      boxShadow: `0 4px 24px ${alpha(COLORS.dark, 0.3)}`,
      "&:hover": {
        borderColor: COLORS.primary,
        transform: "translateY(-4px)",
        boxShadow: `0 16px 40px ${alpha(COLORS.dark, 0.4)}`,
        "& .cta-link .arrow": { transform: "translateX(5px)" },
      },
    }}
  >
    <IconAvatar dark>
      <ApartmentRoundedIcon />
    </IconAvatar>

    <Typography
      component="h3"
      sx={{
        fontWeight: 700,
        fontSize: { xs: "1.5rem", md: "1.75rem" },
        color: "#FFFFFF",
        mt: 3,
        mb: 1.5,
        letterSpacing: "-0.02em",
      }}
    >
      For Landlords
    </Typography>

    <Typography
      sx={{
        fontSize: 15,
        lineHeight: 1.65,
        color: alpha("#FFFFFF", 0.72),
        mb: "auto",
        pb: 3,
      }}
    >
      List for free and find reliable, background-checked tenants quickly.
    </Typography>

    <CtaLink label="List Property" href="/landlords" light />
  </Box>
);

const UniversitiesCard = () => (
  <Box
    sx={{
      ...cardBase,
      bgcolor: COLORS.brand,
      p: { xs: 2.5, md: 3 },
      "&:hover": {
        borderColor: COLORS.dark,
        transform: "translateY(-3px)",
        boxShadow: `0 12px 32px ${alpha(COLORS.brand, 0.45)}`,
        "& .cta-link .arrow": { transform: "translateX(5px)" },
      },
    }}
  >
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
      <IconAvatar green>
        <SchoolRoundedIcon />
      </IconAvatar>
      <Box>
        <Typography
          component="h3"
          sx={{ fontWeight: 700, fontSize: 16, color: COLORS.dark, mb: 0.5 }}
        >
          Universities
        </Typography>
        <Typography
          sx={{
            fontSize: 13.5,
            lineHeight: 1.6,
            color: alpha(COLORS.dark, 0.75),
          }}
        >
          Bulk student housing management made simple.
        </Typography>
      </Box>
    </Box>
  </Box>
);

const CompaniesCard = () => (
  <Box
    sx={{
      ...cardBase,
      bgcolor: COLORS.lightGray,
      p: { xs: 2.5, md: 3 },
      "&:hover": {
        borderColor: alpha(COLORS.dark, 0.55),
        transform: "translateY(-3px)",
        boxShadow: `0 12px 32px ${alpha(COLORS.ink, 0.08)}`,
        "& .cta-link .arrow": { transform: "translateX(5px)" },
      },
    }}
  >
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
      <IconAvatar>
        <CorporateFareRoundedIcon />
      </IconAvatar>
      <Box>
        <Typography
          component="h3"
          sx={{ fontWeight: 700, fontSize: 16, color: COLORS.ink, mb: 0.5 }}
        >
          Companies
        </Typography>
        <Typography
          sx={{ fontSize: 13.5, lineHeight: 1.6, color: COLORS.inkMuted }}
        >
          Corporate relocation and housing benefits platform.
        </Typography>
      </Box>
    </Box>
  </Box>
);

const SolutionsSection = () => (
  <Box
    component="section"
    sx={{ bgcolor: `${COLORS.light}`, py: { xs: 8, md: 11 } }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
        <Typography
          component="h2"
          sx={{
            mb: 1,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: COLORS.ink,
            fontSize: { xs: "2rem", md: "3rem" },
            fontFamily: FontFamily.mono,
          }}
        >
          Solutions for Everyone
        </Typography>
        <Typography sx={{ fontSize: 15.5, color: COLORS.inkMuted }}>
          Whether you're moving alone or as a growing organization.
        </Typography>
      </Box>

      <Grid container spacing={2.5} sx={{ alignItems: "stretch" }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
          <TenantsCard />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
          <LandlordsCard />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Stack
            spacing={2.5}
            direction={"column"}
            sx={{ height: "100%", direction: "column" }}
          >
            <Grid sx={{ flex: 1, display: "flex" }}>
              <UniversitiesCard />
            </Grid>
            <Grid sx={{ flex: 1, display: "flex" }}>
              <CompaniesCard />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default SolutionsSection;
