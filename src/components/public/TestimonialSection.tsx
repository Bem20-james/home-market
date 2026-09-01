// Dependencies required:
// npm install swiper   (already installed from FeaturedListings)

import { Box, Container, Grid, Typography, Avatar, alpha } from "@mui/material";
import { COLORS } from "../../config/colors";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import { TESTIMONIALS } from "./data";
import { FontFamily } from "../../config/fonts";

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box
      component="section"
      sx={{
        bgcolor: COLORS.white,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: { xs: 4, md: 5 } }}>
              <Typography
                sx={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: COLORS.brand,
                  mb: 1.5,
                }}
              >
                Community Stories
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "4rem" },
                  fontFamily: FontFamily.default,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  color: COLORS.ink,
                }}
              >
                What our community
                <br />
                is saying
              </Typography>
            </Box>

            <Box sx={{ position: "relative", overflow: "visible" }}>
              <Swiper
                onSwiper={(s) => {
                  swiperRef.current = s;
                }}
                modules={[Autoplay, EffectCreative, A11y]}
                direction="vertical"
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [0, "-118%", -200],
                    scale: 0.76,
                    opacity: 0,
                  },
                  next: {
                    translate: [0, "88%", 0],
                    scale: 0.87,
                    opacity: 0.42,
                  },
                }}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 4800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                style={{ height: "258px", overflow: "visible" }}
              >
                {TESTIMONIALS.map((t) => (
                  <SwiperSlide key={t.id} style={{ height: "auto" }}>
                    <Box
                      sx={{
                        bgcolor: COLORS.white,
                        borderRadius: "20px",
                        p: { xs: "22px 24px", md: "26px 30px" },
                        boxShadow: `0 8px 32px ${alpha(COLORS.brandDark, 0.1)}`,
                        border: `1.5px solid ${alpha(COLORS.brand, 0.2)}`,
                        position: "relative",
                        overflow: "hidden",
                        // Accent bar on left edge
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "22%",
                          bottom: "22%",
                          width: "3.5px",
                          borderRadius: "0 4px 4px 0",
                          bgcolor: COLORS.brand,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          bgcolor: alpha(COLORS.brand, 0.1),
                          color: COLORS.brandDark,
                          borderRadius: "20px",
                          px: 1.25,
                          py: "3px",
                          mb: 1.75,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.07em",
                          }}
                        >
                          {t.tag}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: 13.5, md: 14.5 },
                          lineHeight: 1.76,
                          color: COLORS.inkMuted,
                          mb: 2.25,
                          fontStyle: "italic",
                        }}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Avatar
                          src={t.avatar}
                          alt={t.name}
                          sx={{
                            width: 40,
                            height: 40,
                            border: `2px solid ${alpha(COLORS.brand, 0.35)}`,
                          }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: 13.5,
                              color: COLORS.ink,
                            }}
                          >
                            {t.name}
                          </Typography>
                          <Typography
                            sx={{ fontSize: 11.5, color: COLORS.inkMuted }}
                          >
                            {t.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mt: 3.5,
              }}
            >
              {TESTIMONIALS.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  sx={{
                    height: 3,
                    width: 32,
                    borderRadius: "4px",
                    bgcolor: alpha(COLORS.brandDark, 0.16),
                    cursor: "pointer",
                    transition: "background 0.3s, width 0.3s",
                    "&:hover": { bgcolor: alpha(COLORS.brand, 0.4) },
                  }}
                />
              ))}
              <Typography
                sx={{ fontSize: 11.5, color: COLORS.inkMuted, ml: 0.5 }}
              >
                {TESTIMONIALS.length} stories
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT — floating orbital display */}
          <Grid
            size={{ xs: 0, md: 6 }}
            sx={{
              display: { xs: "none", md: "block" },
              height: 500,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/home/testimonial.jpg"
              alt="Members of the team behind the platform"
              sx={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "18px",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
