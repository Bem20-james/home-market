import { Box, Container, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../../config/fonts";

import { COLORS } from "../../../config/colors";

const ListingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
        pb: { xs: "180px", sm: "200px", md: "150px" },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(ellipse at bottom left,rgba(27, 54, 93, 1) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(ellipse at bottom right, rgba(27, 54, 93, 1) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "55%",
          background:
            "linear-gradient(to top, rgba(30, 136, 229, 0.58) 0%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={4}
          sx={{ alignItems: "center", textAlign: "center", mt: 15 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", sm: "4rem", md: "5rem" },
              fontWeight: 300,
              color: COLORS.bg,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "1100px",
              fontFamily: FontFamily.primary,
            }}
          >
            Discover Top
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "none" } }}
            >
              &nbsp;
            </Box>
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            <Box component="span" sx={{ color: COLORS.background }}>
              Properties Near You
            </Box>
          </Typography>

          <Typography
            sx={{
              color: `${COLORS.secondary}90`,
              fontSize: { xs: "1rem", md: ".9rem" },
              lineHeight: 1.6,
              maxWidth: "400px",
              fontWeight: 400,
            }}
          >
            Explore verified listings directly from landlords and move into your
            dream space faster than ever.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ListingPage;
