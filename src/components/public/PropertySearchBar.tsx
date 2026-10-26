import {
  Box,
  Button,
  ButtonBase,
  ClickAwayListener,
  Divider,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Slider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { COLORS, Palette } from "../../config/colors";

// ─── Constants & helpers ─────────────────────────────────────────────────────

const MIN = 0;
const MAX = 500_000_000;

const GREEN_TINT = "rgba(59,109,17,0.10)";
const GREEN_TINT_SOFT = "rgba(59,109,17,0.06)";

const PROPERTY_TYPES = [
  { value: "Apartment", hint: "Flats & units", Icon: ApartmentOutlinedIcon },
  { value: "House", hint: "Detached homes", Icon: HomeOutlinedIcon },
  { value: "Duplex", hint: "Two-storey", Icon: VillaOutlinedIcon },
  { value: "Studio", hint: "Open plan", Icon: BedOutlinedIcon },
  { value: "Penthouse", hint: "Top floor", Icon: LocationCityOutlinedIcon },
  { value: "Land", hint: "Plots", Icon: LandscapeOutlinedIcon },
];

const shortLabel = (min: number, max: number) => {
  const fmt = (v: number) =>
    v >= 1_000_000
      ? `₦${(v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1)}M`
      : v >= 1_000
        ? `₦${(v / 1_000).toFixed(0)}k`
        : `₦${v}`;
  if (min === MIN && max === MAX) return "Any";
  return `${fmt(min)} – ${fmt(max)}`;
};

export interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: [number, number];
}

type PanelName = "type" | "price" | null;

// ─── Styles ──────────────────────────────────────────────────────────────────

const popIn = keyframes`
  from { opacity: 0; transform: translateY(-6px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

/**
 * Field tile. On desktop (md+) it's a transparent segment inside one pill bar.
 * Below md every field becomes its own tile so the bar reads as a compact card.
 */
const tileSx = (opts: {
  stacked?: boolean;
  open?: boolean;
}): SxProps<Theme> => ({
  position: "relative",
  display: "flex",
  alignItems: opts.stacked ? { xs: "flex-start", sm: "center" } : "center",
  justifyContent: opts.stacked
    ? { xs: "space-between", sm: "flex-start" }
    : "flex-start",
  flexDirection: opts.stacked ? { xs: "column", sm: "row" } : "row",
  gap: { xs: opts.stacked ? 1 : 1.5, sm: 1.5 },
  width: "100%",
  minWidth: 0,
  minHeight: opts.stacked ? { xs: 108, sm: 64, md: 62 } : { xs: 64, md: 62 },
  padding: { xs: "12px 14px", md: "10px 16px" },
  borderRadius: "14px",
  textAlign: "left",
  cursor: "pointer",
  backgroundColor: opts.open
    ? GREEN_TINT_SOFT
    : { xs: "#f6f7f5", md: "transparent" },
  border: "1px solid",
  borderColor: opts.open ? COLORS.bg : { xs: "#ececec", md: "transparent" },
  transition: "background-color .15s ease, border-color .15s ease",
  "&:hover": { backgroundColor: opts.open ? GREEN_TINT_SOFT : "#f0f2ee" },
  "&:focus-within, &.Mui-focusVisible": { borderColor: COLORS.bg },
});

const IconBubble = styled(Box)(() => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  color: Palette.primary.default,
  backgroundColor: GREEN_TINT,
  "& svg": { fontSize: 22 },
}));

const FieldLabel = styled(Typography)(() => ({
  display: "block",
  fontSize: 12.5,
  lineHeight: 1.2,
  fontWeight: 500,
  color: "#8a8f87",
  userSelect: "none",
}));

const FieldValue = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  lineHeight: 1.35,
  fontWeight: 700,
  color: COLORS.tertiary,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  [theme.breakpoints.down("sm")]: { fontSize: 14 },
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& input": {
    fontSize: 15,
    fontWeight: 700,
    color: COLORS.tertiary,
    padding: 0,
    lineHeight: 1.35,
    textOverflow: "ellipsis",
    "&::placeholder": { color: "#bdbdbd", fontWeight: 400, opacity: 1 },
  },
  [theme.breakpoints.down("sm")]: { "& input": { fontSize: 14 } },
}));

const Chevron = styled(KeyboardArrowDownIcon, {
  shouldForwardProp: (p) => p !== "open",
})<{ open: boolean }>(({ open, theme }) => ({
  flexShrink: 0,
  fontSize: 20,
  color: Palette.primary.dark,
  transition: "transform .2s ease",
  transform: open ? "rotate(180deg)" : "none",
  // On phones the icon sits in the tile's corner so text gets the full width.
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: 12,
    right: 10,
  },
  [theme.breakpoints.up("sm")]: { marginLeft: "auto" },
}));

const PriceSlider = styled(Slider)(() => ({
  color: COLORS.bg,
  height: 4,
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    border: `2px solid ${COLORS.bg}`,
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "0 0 0 6px rgba(59,109,17,0.15)",
    },
  },
  "& .MuiSlider-track": { border: "none", backgroundColor: COLORS.bg },
  "& .MuiSlider-rail": { backgroundColor: "#d0d0d0" },
}));

const PriceInput = styled(OutlinedInput)(() => ({
  borderRadius: "10px",
  fontSize: 14,
  fontWeight: 600,
  color: COLORS.tertiary,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#dfe3da",
    borderWidth: 1.5,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: Palette.primary.default,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: COLORS.bg,
    borderWidth: 2,
  },
  "& input": { padding: "10px 12px", minWidth: 0 },
}));

// ─── Dropdown panel ──────────────────────────────────────────────────────────
// Rendered *inside* the component with position:absolute (not in a portal),
// so it is physically attached to the bar and scrolls with it.

interface PanelProps {
  width: number;
  children: React.ReactNode;
  label: string;
}

const Panel = ({ width, children, label }: PanelProps) => (
  <Box
    role="dialog"
    aria-label={label}
    sx={{
      position: "absolute",
      zIndex: 30,
      top: { xs: "calc(100% + 10px)", md: "calc(100% + 20px)" },
      left: 0,
      right: { xs: 0, md: "auto" },
      width: { xs: "auto", md: width },
      backgroundColor: "#fff",
      border: "1px solid #eef0eb",
      borderRadius: "18px",
      padding: { xs: 2, sm: 2.5 },
      boxShadow: "0px 16px 48px rgba(0,0,0,0.14)",
      animation: `${popIn} .16s ease-out`,
      "@media (prefers-reduced-motion: reduce)": { animation: "none" },
    }}
  >
    {children}
  </Box>
);

const PanelHeader = ({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    }}
  >
    <Typography sx={{ fontWeight: 700, fontSize: 16, color: COLORS.tertiary }}>
      {title}
    </Typography>
    {action}
  </Box>
);

// ─── Property type panel ─────────────────────────────────────────────────────

const TypePanel = ({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (v: string) => void;
}) => (
  <Panel width={372} label="Property type">
    <PanelHeader title="Property type" />
    <Box
      role="listbox"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
        gap: 1,
      }}
    >
      {PROPERTY_TYPES.map(({ value: v, hint, Icon }) => {
        const selected = v === value;
        return (
          <ButtonBase
            key={v}
            role="option"
            aria-selected={selected}
            onClick={() => onSelect(v)}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0.75,
              padding: "12px",
              borderRadius: "14px",
              textAlign: "left",
              border: "1.5px solid",
              borderColor: selected ? COLORS.bg : "#ececec",
              backgroundColor: selected ? GREEN_TINT_SOFT : "#fff",
              transition: "all .15s ease",
              "&:hover": {
                borderColor: COLORS.bg,
                backgroundColor: GREEN_TINT_SOFT,
              },
              "&.Mui-focusVisible": { outline: `2px solid ${COLORS.bg}` },
            }}
          >
            <Icon
              sx={{
                fontSize: 26,
                color: selected ? COLORS.bg : Palette.primary.default,
              }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: 1.2,
                  color: COLORS.tertiary,
                }}
              >
                {v}
              </Typography>
              <Typography sx={{ fontSize: 11.5, color: "#8a8f87", mt: 0.25 }}>
                {hint}
              </Typography>
            </Box>
            {selected && (
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: 18,
                  color: COLORS.bg,
                }}
              />
            )}
          </ButtonBase>
        );
      })}
    </Box>
  </Panel>
);

// ─── Price panel ─────────────────────────────────────────────────────────────

const PricePanel = ({
  range,
  onApply,
  onReset,
}: {
  range: [number, number];
  onApply: (val: [number, number]) => void;
  onReset: () => void;
}) => {
  const [local, setLocal] = useState<[number, number]>(range);
  const sorted: [number, number] = [
    Math.min(local[0], local[1]),
    Math.max(local[0], local[1]),
  ];

  const parse = (raw: string) =>
    Math.min(MAX, Number(raw.replace(/[^0-9]/g, "")));

  const adornment = (
    <InputAdornment position="start">
      <Typography sx={{ color: COLORS.bg, fontWeight: 700, fontSize: 14 }}>
        ₦
      </Typography>
    </InputAdornment>
  );

  return (
    <Panel width={340} label="Price range">
      <PanelHeader
        title="Price range"
        action={
          <ButtonBase
            onClick={() => {
              setLocal([MIN, MAX]);
              onReset();
            }}
            sx={{
              fontSize: 13,
              fontWeight: 600,
              color: COLORS.bg,
              borderRadius: "6px",
              px: 0.5,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Reset
          </ButtonBase>
        }
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
        <PriceInput
          value={local[0].toLocaleString("en-NG")}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocal([parse(e.target.value), local[1]])
          }
          startAdornment={adornment}
          inputProps={{ inputMode: "numeric", "aria-label": "Minimum price" }}
          fullWidth
        />
        <Typography sx={{ color: "#aaa", flexShrink: 0 }}>—</Typography>
        <PriceInput
          value={local[1].toLocaleString("en-NG")}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocal([local[0], parse(e.target.value)])
          }
          startAdornment={adornment}
          inputProps={{ inputMode: "numeric", "aria-label": "Maximum price" }}
          fullWidth
        />
      </Box>

      <Box sx={{ px: 1, mb: 0.5 }}>
        <PriceSlider
          value={sorted}
          onChange={(_: Event, v: number | number[]) =>
            setLocal(v as [number, number])
          }
          min={MIN}
          max={MAX}
          step={10_000}
          disableSwap
          getAriaLabel={(i) => (i === 0 ? "Minimum price" : "Maximum price")}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2.5 }}>
        <Typography sx={{ fontSize: 12, color: "#9e9e9e" }}>₦0</Typography>
        <Typography sx={{ fontSize: 12, color: "#9e9e9e" }}>
          ₦500,000,000
        </Typography>
      </Box>

      <Button
        fullWidth
        onClick={() => onApply(sorted)}
        sx={{
          backgroundColor: COLORS.bg,
          color: "#fff",
          fontWeight: 700,
          fontSize: 15,
          borderRadius: "50px",
          py: 1.4,
          textTransform: "none",
          "&:hover": { backgroundColor: COLORS.bgHover },
        }}
      >
        Apply filter
      </Button>
    </Panel>
  );
};

// ─── Main component ──────────────────────────────────────────────────────────

interface PropertySearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

const PropertySearchBar = ({ onSearch }: PropertySearchBarProps) => {
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN, MAX]);
  const [open, setOpen] = useState<PanelName>(null);

  const toggle = (name: Exclude<PanelName, null>) =>
    setOpen((cur) => (cur === name ? null : name));

  const TypeIcon =
    PROPERTY_TYPES.find((t) => t.value === propertyType)?.Icon ??
    ApartmentOutlinedIcon;

  return (
    <ClickAwayListener onClickAway={() => setOpen(null)}>
      <Box
        onKeyDown={(e: KeyboardEvent) => e.key === "Escape" && setOpen(null)}
        sx={{ position: "relative", width: "100%", maxWidth: 950 }}
      >
        {/* Mobile/tablet: 2‑col (xs) / 3‑col (sm) grid of tiles. Desktop: one pill row. */}
        <Box
          sx={{
            display: { xs: "grid", md: "flex" },
            gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" },
            alignItems: "center",
            gap: { xs: 1.25, md: 0 },
            backgroundColor: "#fff",
            borderRadius: { xs: "20px", md: "18px" },
            padding: { xs: 1.5, md: "20px" },
            boxShadow: "0px 4px 20px rgba(0,0,0,0.10)",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          {/* ── Location ── */}
          <Box
            sx={{
              gridColumn: { xs: "1 / -1", sm: "auto" },
              flex: { md: 1 },
              minWidth: 0,
            }}
          >
            <Box component="label" sx={tileSx({})}>
              <IconBubble>
                <PlaceOutlinedIcon />
              </IconBubble>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <FieldLabel>Location</FieldLabel>
                <StyledInput
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                  inputProps={{ "aria-label": "Location" }}
                />
              </Box>
            </Box>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "block" }, mx: 0.5, my: 1 }}
          />

          {/* ── Type ── (wrapper is the positioning anchor on desktop only) */}
          <Box
            sx={{
              position: { xs: "static", md: "relative" },
              flex: { md: 1 },
              minWidth: 0,
            }}
          >
            <ButtonBase
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open === "type"}
              onClick={() => toggle("type")}
              sx={tileSx({ stacked: true, open: open === "type" })}
            >
              <IconBubble>
                <TypeIcon />
              </IconBubble>
              <Box sx={{ minWidth: 0, width: { xs: "100%", sm: "auto" } }}>
                <FieldLabel>Type</FieldLabel>
                <FieldValue>{propertyType}</FieldValue>
              </Box>
              <Chevron open={open === "type"} />
            </ButtonBase>

            {open === "type" && (
              <TypePanel
                value={propertyType}
                onSelect={(v) => {
                  setPropertyType(v);
                  setOpen(null);
                }}
              />
            )}
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "block" }, mx: 0.5, my: 1 }}
          />

          {/* ── Price ── */}
          <Box
            sx={{
              position: { xs: "static", md: "relative" },
              flex: { md: 1 },
              minWidth: 0,
            }}
          >
            <ButtonBase
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open === "price"}
              onClick={() => toggle("price")}
              sx={tileSx({ stacked: true, open: open === "price" })}
            >
              <IconBubble>
                <CurrencyExchangeIcon />
              </IconBubble>
              <Box sx={{ minWidth: 0, width: { xs: "100%", sm: "auto" } }}>
                <FieldLabel>Price</FieldLabel>
                <FieldValue>
                  {shortLabel(priceRange[0], priceRange[1])}
                </FieldValue>
              </Box>
              <Chevron open={open === "price"} />
            </ButtonBase>

            {open === "price" && (
              <PricePanel
                range={priceRange}
                onApply={(v) => {
                  setPriceRange(v);
                  setOpen(null);
                }}
                onReset={() => setPriceRange([MIN, MAX])}
              />
            )}
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "block" }, mx: 0.5, my: 1 }}
          />

          {/* ── Search ── full-width labelled button on small screens, square icon on desktop */}
          <Button
            aria-label="Search properties"
            onClick={() => {
              setOpen(null);
              onSearch?.({ location, propertyType, priceRange });
            }}
            sx={{
              gridColumn: "1 / -1",
              gap: 1,
              height: { xs: 52, md: 62 },
              width: { xs: "100%", md: 62 },
              minWidth: { md: 62 },
              flexShrink: 0,
              ml: { md: 0.5 },
              borderRadius: "14px",
              backgroundColor: Palette.accent.main,
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              textTransform: "none",
              "&:hover": { backgroundColor: Palette.accent.light },
              "& svg": { fontSize: 24 },
            }}
          >
            <SearchIcon />
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "none" } }}
            >
              Search properties
            </Box>
          </Button>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default PropertySearchBar;
