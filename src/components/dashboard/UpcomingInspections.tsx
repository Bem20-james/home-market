import {
  Avatar,
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";

export interface InspectionRequest {
  id: number;
  visitor: string;
  property: string;
  when: string; // e.g. "Tomorrow, 10:00 AM"
  avatar?: string;
}

interface Props {
  requests: InspectionRequest[];
  onAccept?: (request: InspectionRequest) => void;
  onDecline?: (request: InspectionRequest) => void;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function UpcomingInspections({
  requests,
  onAccept,
  onDecline,
}: Props) {
  return (
    <Paper
      variant="outlined"
      component="section"
      aria-labelledby="upcoming-heading"
      sx={{ borderRadius: 2, borderColor: "divider", p: 2.5 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 1.5,
          mb: 2,
        }}
      >
        <Typography
          id="upcoming-heading"
          component="h2"
          sx={{
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          Upcoming inspections
        </Typography>
        {requests.length > 0 && (
          <Chip
            size="small"
            label={`${requests.length} action required`}
            sx={{
              flexShrink: 0,
              bgcolor: alpha("#E11D48", 0.1),
              color: "#BE123C",
              fontWeight: 600,
              fontSize: 11,
              height: 24,
            }}
          />
        )}
      </Box>

      <Stack spacing={1.5}>
        {requests.map((r) => (
          <Box
            key={r.id}
            sx={{
              p: 2,
              borderRadius: 1.5,
              bgcolor: "#F8FAFC",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                src={r.avatar}
                alt={r.visitor}
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 14,
                  fontWeight: 700,
                  bgcolor: "#E0E7FF",
                  color: "#3730A3",
                }}
              >
                {initials(r.visitor)}
              </Avatar>
              <Box sx={{ minWidth: 0 }}>
                <Typography noWrap sx={{ fontSize: 14, fontWeight: 700 }}>
                  {r.visitor}
                </Typography>
                <Typography noWrap variant="caption" color="text.secondary">
                  {r.property}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                mt: 1.5,
                color: "text.secondary",
                fontSize: 13,
              }}
            >
              <CalendarTodayOutlined sx={{ fontSize: 15 }} />
              {r.when}
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                mt: 1.75,
              }}
            >
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => onDecline?.(r)}
                sx={{
                  borderRadius: 1.25,
                  borderColor: "divider",
                  bgcolor: "#fff",
                  color: "text.secondary",
                  "&:hover": { bgcolor: "#F1F5F9" },
                }}
              >
                Decline
              </Button>
              <Button
                variant="contained"
                disableElevation
                onClick={() => onAccept?.(r)}
                sx={{
                  borderRadius: 1.25,
                  bgcolor: "#0F1B2D",
                  "&:hover": { bgcolor: "#1E3050" },
                }}
              >
                Accept
              </Button>
            </Box>
          </Box>
        ))}

        {requests.length === 0 && (
          <Box
            sx={{
              py: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              color: "text.disabled",
            }}
          >
            <EventAvailableOutlined sx={{ fontSize: 32 }} />
            <Typography variant="body2">No pending requests</Typography>
          </Box>
        )}
      </Stack>
    </Paper>
  );
}
