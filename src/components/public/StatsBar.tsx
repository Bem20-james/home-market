import { Box, Typography, Divider, Stack } from "@mui/material";

const stats = [
  { value: "10k+", label: "Active Listings" },
  { value: "24hr", label: "Fast Response" },
  { value: "100%", label: "Verified Owners" },
  { value: "No", label: "Agent Fees" },
  { value: "4.9/5", label: "User Rating" },
];

export default function StatsBar() {
  return (
    <Box
      sx={{
        backgroundColor: "#eef6e4",
        py: { xs: 4, md: 5 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          maxWidth: 1200,
          mx: "auto",
        }}
        divider={
          <Divider
            flexItem
            sx={{
              borderColor: "rgba(0,0,0,0.08)",
              display: { xs: "none", md: "block" },
              orientation: { xs: "horizontal", md: "vertical" },
            }}
          />
        }
        spacing={{ xs: 2.5, md: 0 }}
      >
        {stats.map((stat) => (
          <Box
            key={stat.label}
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: 1,
              flex: 1,
              justifyContent: { xs: "flex-start", md: "center" },
              minWidth: 0,
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: { xs: 18, md: 19 },
                color: "#3b6d11",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: 14, md: 14.5 },
                fontWeight: 500,
                color: "#5a5a5a",
                whiteSpace: "nowrap",
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
