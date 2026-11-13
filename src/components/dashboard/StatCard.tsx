import { type ReactNode } from "react";
import { Box, Chip, Paper, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import type { SvgIconComponent } from "@mui/icons-material";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";

export type StatTone = "rose" | "blue" | "emerald" | "amber";

const TONES: Record<StatTone, string> = {
  rose: "#E11D48",
  blue: "#0284C7",
  emerald: "#059669",
  amber: "#B45309",
};

export interface StatCardProps {
  icon: SvgIconComponent;
  label: string;
  value: ReactNode;
  badge?: string;
  tone?: StatTone;
  onClick?: () => void;
}

/**
 * Reusable stat card. The icon is shown small in a chip and again oversized,
 * tilted and faded in the background of the card.
 */
export default function StatCard({
  icon: Icon,
  label,
  value,
  badge,
  tone = "blue",
  onClick,
}: StatCardProps) {
  const main = TONES[tone];
  const interactive = Boolean(onClick);

  return (
    <Paper
      variant="outlined"
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => (e.key === "Enter" || e.key === " ") && onClick?.()
          : undefined
      }
      sx={{
        position: "relative",
        overflow: "hidden",
        p: 2.5,
        borderRadius: 2,
        borderColor: "divider",
        backgroundImage: `linear-gradient(135deg, ${alpha(main, 0.08)} 0%, transparent 55%)`,
        cursor: interactive ? "pointer" : "default",
        transition: "box-shadow .2s",
        "&:hover": interactive
          ? { boxShadow: "0 10px 28px -14px rgba(15,27,45,.3)" }
          : undefined,
        "&:hover .ghost": interactive
          ? { transform: "rotate(-6deg) scale(1.06)" }
          : undefined,
        "&:focus-visible": { outline: `2px solid ${main}`, outlineOffset: 2 },
      }}
    >
      {/* oversized faded watermark */}
      <Icon
        className="ghost"
        aria-hidden
        sx={{
          position: "absolute",
          right: -28,
          bottom: -34,
          fontSize: 168,
          color: main,
          opacity: 0.09,
          transform: "rotate(-12deg)",
          transition: "transform .5s",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            display: "grid",
            placeItems: "center",
            borderRadius: 1.5,
            bgcolor: alpha(main, 0.1),
            color: main,
          }}
        >
          <Icon fontSize="small" />
        </Box>
        {badge && (
          <Chip
            label={badge}
            size="small"
            sx={{
              bgcolor: alpha(main, 0.1),
              color: main,
              fontWeight: 600,
              fontSize: 12,
              height: 24,
            }}
          />
        )}
      </Box>

      <Box
        sx={{
          position: "relative",
          mt: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
          <Typography
            sx={{
              mt: 0.5,
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {value}
          </Typography>
        </Box>
        {interactive && <ArrowOutwardRounded sx={{ color: "text.disabled" }} />}
      </Box>
    </Paper>
  );
}
