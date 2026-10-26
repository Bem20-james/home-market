import { Box, Container, Typography, IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { COLORS, Palette } from "../../config/colors";
import { useRef } from "react";
import { LISTINGS } from "./data";
import ListingCard from "./ListingCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { FontFamily } from "../../config/fonts";

const FeaturedListings = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box
      component="section"
      sx={{ bgcolor: COLORS.white, py: { xs: 6, md: 8 }, overflow: "hidden" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: COLORS.ink,
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: FontFamily.secondary,
                mb: "2px",
              }}
            >
              Featured Listings
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: Palette.primary.main,
                fontWeight: 500,
              }}
            >
              Hand-picked properties with the best value.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mt: "6px" }}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              size="small"
              sx={{
                width: 38,
                height: 38,
                border: "1.5px solid #E0E0E0",
                color: "#444",
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: Palette.primary.main,
                  borderColor: Palette.primary.main,
                  color: "#fff",
                },
                transition: "all 0.2s",
              }}
            >
              <ChevronLeftRoundedIcon />
            </IconButton>

            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              size="small"
              sx={{
                width: 38,
                height: 38,
                border: "1.5px solid #E0E0E0",
                color: "#444",
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: Palette.primary.main,
                  borderColor: Palette.primary.main,
                  color: "#fff",
                },
                transition: "all 0.2s",
              }}
            >
              <ChevronRightRoundedIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Swiper carousel */}
        <Swiper
          modules={[Autoplay, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            600: { slidesPerView: 2, spaceBetween: 20 },
            900: { slidesPerView: 3, spaceBetween: 24 },
          }}
          style={{ width: "100%", paddingBottom: "4px" }}
        >
          {LISTINGS.map((listing) => (
            <SwiperSlide key={listing.id} style={{ height: "auto" }}>
              <ListingCard listing={listing} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FeaturedListings;
