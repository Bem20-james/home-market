import { Box, Chip } from "@mui/material";

/* ---------- Status badge for table cells ---------- */
export type Status =
  | "Confirmed"
  | "Pending"
  | "Cancelled"
  | "Completed"
  | "Occupied"
  | "Vacant";

const STATUS_COLORS: Record<Status, { fg: string; bg: string }> = {
  Confirmed: { fg: "#047857", bg: "#ECFDF5" },
  Pending: { fg: "#B45309", bg: "#FFFBEB" },
  Cancelled: { fg: "#BE123C", bg: "#FFF1F2" },
  Completed: { fg: "#475569", bg: "#F1F5F9" },
  Occupied: { fg: "#047857", bg: "#ECFDF5" },
  Vacant: { fg: "#1D4ED8", bg: "#EFF6FF" },
};

export function StatusBadge({ status }: { status: Status }) {
  const { fg, bg } = STATUS_COLORS[status];
  return (
    <Chip
      size="small"
      label={status}
      icon={
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: fg,
            ml: "8px !important",
          }}
        />
      }
      sx={{ bgcolor: bg, color: fg, fontWeight: 600, fontSize: 12, height: 24 }}
    />
  );
}
