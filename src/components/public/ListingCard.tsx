import { Box, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
import BathtubRoundedIcon from "@mui/icons-material/BathtubRounded";
import SquareFootRoundedIcon from "@mui/icons-material/SquareFootRounded";
import { Palette } from "../../config/colors";
import { Stat, FavButton, Badge } from "./SharedUi";
import type { Listing } from "./data";

const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #F0F0F0",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        cursor: "pointer",
        height: "100%",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 28px rgba(0,0,0,0.11)",
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative", pt: "58%", bgcolor: "#F5F5F5" }}>
        <Box
          component="img"
          src={listing.image}
          alt={listing.title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Badge type={listing.badge} />
        <FavButton />
      </Box>

      {/* Body */}
      <Box sx={{ p: "16px 18px 18px" }}>
        {/* Title + price */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: "4px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 15,
              color: "#1A1A1A",
              lineHeight: 1.3,
              maxWidth: "60%",
            }}
          >
            {listing.title}
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 17,
                color: Palette.primary.main,
                lineHeight: 1.2,
              }}
            >
              ${listing.price.toLocaleString()}
            </Typography>
            <Typography sx={{ fontSize: 11, color: "#aaa" }}>/month</Typography>
          </Box>
        </Box>

        {/* Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mb: "14px",
          }}
        >
          <LocationOnRoundedIcon
            sx={{ fontSize: 13, color: Palette.primary.main }}
          />
          <Typography sx={{ fontSize: 12.5, color: "#888" }}>
            {listing.location}
          </Typography>
        </Box>

        {/* Divider */}
        <Box sx={{ height: "1px", bgcolor: "#F2F2F2", mb: "14px" }} />

        {/* Stats */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Stat icon={<BedRoundedIcon />} label={`${listing.beds}`} />
          <Stat icon={<BathtubRoundedIcon />} label={`${listing.baths}`} />
          <Stat
            icon={<SquareFootRoundedIcon />}
            label={`${listing.sqft.toLocaleString()} sqft`}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default ListingCard;
