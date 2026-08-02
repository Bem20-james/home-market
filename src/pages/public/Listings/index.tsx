import { Box, Container, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";

const ListingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.dark,
        maxHeight: "100vh",
        height: "70vh",
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
            "radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.30) 0%, transparent 70%)",
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
            "radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.30) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={4}
          sx={{ alignItems: "center", textAlign: "center", mt: 25 }}
        >
          <Box
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", sm: "4rem", md: "6rem" },
                fontWeight: 600,
                color: COLORS.white,
                maxWidth: "1100px",
                fontFamily: FontFamily.secondary,
                lineHeight: 0.7,
              }}
            >
              Discover
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: FontFamily.mono,
                fontSize: { xs: "2rem", md: "2.4rem", lg: "4.5rem" },
                fontWeight: 700,
                fontStyle: "normal",
                letterSpacing: "-0.02em",
                color: COLORS.default,
                mb: 2,
              }}
            >
              Top properties near you
            </Typography>
          </Box>

          <Typography
            data-aos="fade-up"
            data-aos-duration="500"
            sx={{
              color: `${COLORS.offWhite}90`,
              fontSize: { xs: "1rem", md: "1rem" },
              lineHeight: 1,
              maxWidth: "400px",
              fontWeight: 500,
            }}
          >
            Find the perfect creators for your next big campaign.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ListingPage;
