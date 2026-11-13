import { Box, Button, Paper, Typography } from "@mui/material";
import VerifiedUserRounded from "@mui/icons-material/VerifiedUserRounded";
import VerifiedOutlined from "@mui/icons-material/VerifiedOutlined";

interface Props {
  boost?: string; // e.g. "40%"
  onStart?: () => void;
}

export default function IdentityVerification({
  boost = "40%",
  onStart,
}: Props) {
  return (
    <Paper
      component="section"
      aria-label="Verify your identity"
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        p: 3,
        borderRadius: 2,
        color: "#fff",
        background: "linear-gradient(145deg, #1B3358 0%, #0E1B2C 70%)",
        boxShadow: "0 14px 32px -16px rgba(14,27,44,.7)",
      }}
    >
      {/* oversized faded watermark + glow */}
      <VerifiedUserRounded
        aria-hidden
        sx={{
          position: "absolute",
          right: -36,
          bottom: -44,
          fontSize: 200,
          color: "#fff",
          opacity: 0.06,
          transform: "rotate(-10deg)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -80,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          bgcolor: "rgba(96,165,250,.18)",
          filter: "blur(60px)",
        }}
      />

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            display: "grid",
            placeItems: "center",
            borderRadius: 1.5,
            bgcolor: "rgba(255,255,255,.1)",
            color: "#93C5FD",
          }}
        >
          <VerifiedOutlined />
        </Box>

        <Typography
          component="h2"
          sx={{
            mt: 2,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Verify your identity
        </Typography>
        <Typography
          sx={{ mt: 0.75, fontSize: 14, lineHeight: 1.6, color: "#CBD5E1" }}
        >
          Boost your landlord trust score by {boost} and get listed in our
          premium investor circle.
        </Typography>

        <Button
          onClick={onStart}
          variant="contained"
          disableElevation
          sx={{
            mt: 2.5,
            px: 3,
            py: 1.1,
            borderRadius: 99,
            bgcolor: "#fff",
            color: "#0F1B2D",
            "&:hover": { bgcolor: "#EFF6FF" },
          }}
        >
          Start verification
        </Button>
      </Box>
    </Paper>
  );
}
