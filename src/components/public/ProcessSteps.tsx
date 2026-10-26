import { Box, Container, Stack, Typography, alpha } from "@mui/material";
import { steps, type StepsType } from "./data";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";

const ProcessSteps = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: COLORS.neutral,
        py: { xs: 8, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ textAlign: "center", mb: { xs: 6, md: 7 } }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: COLORS.ink,
              fontSize: { xs: "2rem", md: "4rem" },
              fontFamily: FontFamily.secondary,
            }}
          >
            Your Journey to a New Home
          </Typography>
          <Typography
            sx={{
              color: COLORS.dark,
              fontSize: { xs: "0.85rem", md: "1rem" },
              mx: "auto",
            }}
          >
            We&apos;ve simplified the entire process, removing the stress of
            traditional real estate agents.
          </Typography>
        </Stack>
        <Box sx={{ position: "relative" }}>
          {/* dotted connector — desktop only, sits behind the cards at icon height */}
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 44,
              left: "16.5%",
              right: "16.5%",
              height: 0,
              borderTop: `2px dashed ${alpha(COLORS.brand, 0.35)}`,
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 3, md: 3.5 },
              alignItems: "stretch",
            }}
          >
            {steps.map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

function StepCard({ step }: { step: StepsType }) {
  const { eyebrow, title, description, icon, active } = step;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: 4,
        p: { xs: 3, md: 3.25 },
        bgcolor: active ? COLORS.tertiary : COLORS.neutral,
        border: active ? "none" : `1px solid ${alpha(COLORS.brand, 0.12)}`,
        boxShadow: active
          ? `0 18px 32px -12px ${alpha(COLORS.tertiary, 0.55)}`
          : `0 1px 2px ${alpha(COLORS.ink, 0.04)}`,
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: active
            ? `0 22px 38px -10px ${alpha(COLORS.tertiary, 0.6)}`
            : `0 12px 24px -10px ${alpha(COLORS.brandDark, 0.18)}`,
        },
      }}
    >
      <Stack spacing={1.75}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: active
              ? alpha(COLORS.accent, 0.22)
              : alpha(COLORS.brand, 0.1),
            color: active ? COLORS.accent : COLORS.primary,
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: active ? alpha("#ffffff", 0.75) : alpha(COLORS.dark, 0.65),
          }}
        >
          {eyebrow}
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: active ? "#ffffff" : COLORS.ink,
            fontFamily: FontFamily.primary,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.92rem",
            lineHeight: 1.6,
            color: active ? alpha("#ffffff", 0.92) : COLORS.dark,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}

export default ProcessSteps;
