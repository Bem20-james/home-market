import { Box, Button, LinearProgress, Paper, Typography } from "@mui/material";
import ApartmentRounded from "@mui/icons-material/ApartmentRounded";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import EventRepeatOutlined from "@mui/icons-material/EventRepeatOutlined";

export interface Rental {
  name: string;
  address?: string;
  image?: string;
  nextPaymentDate: string;
  amount: string;
  leaseProgress: number; // 0-100
  leaseLabel?: string;
}

interface Props {
  rental: Rental;
  onPayRent?: () => void;
}

export default function ActiveRental({ rental, onPayRent }: Props) {
  const {
    name,
    address,
    image,
    nextPaymentDate,
    amount,
    leaseProgress,
    leaseLabel,
  } = rental;

  return (
    <Paper
      component="section"
      aria-label="Active rental"
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: 2.5, sm: 3 },
        borderRadius: 2,
        bgcolor: "#0E1B2C",
        color: "#fff",
        boxShadow: "0 14px 32px -16px rgba(14,27,44,.7)",
      }}
    >
      {/* background glow + faded icon */}
      <Box
        sx={{
          position: "absolute",
          top: -96,
          right: -96,
          width: 288,
          height: 288,
          borderRadius: "50%",
          bgcolor: "rgba(45,212,191,.12)",
          filter: "blur(60px)",
        }}
      />
      <ApartmentRounded
        sx={{
          position: "absolute",
          right: 96,
          bottom: -40,
          fontSize: 224,
          color: "#fff",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "center" },
          gap: 2.5,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: 128 },
            height: { xs: 112, sm: 96 },
            flexShrink: 0,
            borderRadius: 1.5,
            overflow: "hidden",
            bgcolor: "rgba(255,255,255,.1)",
            display: "grid",
            placeItems: "center",
            outline: "1px solid rgba(255,255,255,.1)",
          }}
        >
          {image ? (
            <Box
              component="img"
              src={image}
              alt={name}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <ApartmentRounded
              sx={{ color: "rgba(255,255,255,.3)", fontSize: 32 }}
            />
          )}
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              px: 1.25,
              py: 0.4,
              borderRadius: 99,
              bgcolor: "rgba(45,212,191,.15)",
              color: "#99F6E4",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#5EEAD4",
              }}
            />
            Active rental
          </Box>

          <Typography
            sx={{
              mt: 1,
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </Typography>

          <Box
            sx={{
              mt: 0.75,
              display: "flex",
              flexWrap: "wrap",
              columnGap: 2,
              rowGap: 0.5,
              color: "#CBD5E1",
              fontSize: 14,
            }}
          >
            {address && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <PlaceOutlined sx={{ fontSize: 17, color: "#94A3B8" }} />
                {address}
              </Box>
            )}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <EventRepeatOutlined sx={{ fontSize: 17, color: "#94A3B8" }} />
              Next payment {nextPaymentDate}
              <Box component="span" sx={{ color: "#fff", fontWeight: 700 }}>
                {amount}
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
          onClick={onPayRent}
          variant="contained"
          disableElevation
          sx={{
            flexShrink: 0,
            px: 3.5,
            py: 1.25,
            borderRadius: 99,
            bgcolor: "#fff",
            color: "#0F1B2D",
            "&:hover": { bgcolor: "#F0FDFA" },
          }}
        >
          Pay rent
        </Button>
      </Box>

      <Box sx={{ position: "relative", mt: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 0.75,
            fontSize: 12,
            color: "#94A3B8",
          }}
        >
          <span>Lease progress</span>
          {leaseLabel && <span>{leaseLabel}</span>}
        </Box>
        <LinearProgress
          variant="determinate"
          value={leaseProgress}
          sx={{
            height: 6,
            borderRadius: 99,
            bgcolor: "rgba(255,255,255,.1)",
            "& .MuiLinearProgress-bar": {
              borderRadius: 99,
              background: "linear-gradient(90deg,#5EEAD4,#6EE7B7)",
            },
          }}
        />
      </Box>
    </Paper>
  );
}
