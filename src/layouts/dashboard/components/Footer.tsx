import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        px: 3,
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 1,
        borderTop: "1px solid #f0f0f5",
        background: "#ffffff",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.75rem",
          color: "#bbb",
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        &copy; Prop Listing 2026 — All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
