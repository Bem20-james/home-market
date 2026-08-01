import {
  Box,
  InputBase,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Divider,
  Popover,
  Slider,
  Button,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useState, useRef } from "react";
import { COLORS, Palette } from "../../config/colors";

// ─── Styled Components ───────────────────────────────────────────────────────

const SearchBar = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#ffffff",
  borderRadius: "14px",
  padding: "12px 8px",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.10)",
  gap: 0,
  width: "100%",
  maxWidth: 720,
}));

const FieldWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "8px 20px",
  flex: 1,
  minWidth: 0,
  cursor: "pointer",
}));

const FieldLabel = styled(Typography)(() => ({
  fontSize: 11,
  color: "#9e9e9e",
  lineHeight: 1.2,
  fontWeight: 400,
  userSelect: "none",
}));

const StyledInput = styled(InputBase)(() => ({
  "& input": {
    fontSize: 15,
    fontWeight: 700,
    color: COLORS.dark,
    padding: 0,
    lineHeight: 1.3,
    "&::placeholder": {
      color: "#bdbdbd",
      fontWeight: 400,
    },
  },
}));

const StyledSelect = styled(Select)(() => ({
  fontSize: 15,
  fontWeight: 700,
  color: COLORS.dark,
  lineHeight: 1.3,
  "& .MuiSelect-select": {
    padding: 0,
    paddingRight: "20px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
  "& .MuiSelect-icon": {
    color: Palette.primary.dark,
    right: 0,
    fontSize: 20,
  },
  "&:before, &:after": { display: "none" },
}));

const SearchButton = styled(IconButton)(() => ({
  backgroundColor: COLORS.bg,
  borderRadius: "10px",
  width: 62,
  height: 62,
  flexShrink: 0,
  color: "#fff",
  marginRight: 2,
  "&:hover": {
    backgroundColor: COLORS.bgHover,
  },
  "& svg": {
    fontSize: 24,
  },
}));

const GreenIcon = styled(Box)(() => ({
  color: Palette.primary.default,
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  "& svg": { fontSize: 22 },
}));

// Custom slider styling
const PriceSlider = styled(Slider)(() => ({
  color: COLORS.bg,
  height: 4,
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    border: `2px solid ${COLORS.bg}`,
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0 0 0 6px rgba(59,109,17,0.15)`,
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: COLORS.bg,
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#d0d0d0",
  },
}));

const PriceInput = styled(OutlinedInput)(() => ({
  borderRadius: "8px",
  fontSize: 14,
  fontWeight: 600,
  color: COLORS.dark,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: COLORS.bg,
    borderWidth: 1.5,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: Palette.primary.default,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: COLORS.bg,
    borderWidth: 2,
  },
  "& input": {
    padding: "10px 12px",
  },
}));

// ─── Helpers ─────────────────────────────────────────────────────────────────

const MIN = 0;
const MAX = 500_000_000;

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

// ─── Price Range Popover ──────────────────────────────────────────────────────

interface PriceRangePopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  range: [number, number];
  onChange: (val: [number, number]) => void;
}

const PriceRangePopover = ({
  anchorEl,
  open,
  onClose,
  range,
  onChange,
}: PriceRangePopoverProps) => {
  const [local, setLocal] = useState<[number, number]>(range);

  const handleSlider = (_: Event, val: number | number[]) => {
    setLocal(val as [number, number]);
  };

  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value.replace(/[^0-9]/g, ""));
    setLocal([Math.min(v, local[1]), local[1]]);
  };

  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value.replace(/[^0-9]/g, ""));
    setLocal([local[0], Math.max(v, local[0])]);
  };

  const handleApply = () => {
    onChange(local);
    onClose();
  };

  const handleReset = () => {
    setLocal([MIN, MAX]);
    onChange([MIN, MAX]);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      slotProps={{
        paper: {
          sx: {
            mt: 1.5,
            borderRadius: "16px",
            p: 3,
            width: 340,
            boxShadow: "0px 16px 48px rgba(0,0,0,0.14)",
            overflow: "hidden",
          },
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2.5,
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 16, color: COLORS.dark }}>
          Price Range
        </Typography>
        <Typography
          onClick={handleReset}
          sx={{
            fontSize: 13,
            fontWeight: 600,
            color: COLORS.bg,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Reset
        </Typography>
      </Box>

      {/* Min / Max inputs */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
        <PriceInput
          value={local[0].toLocaleString("en-NG")}
          onChange={handleMinInput}
          startAdornment={
            <InputAdornment position="start">
              <Typography
                sx={{ color: COLORS.bg, fontWeight: 700, fontSize: 14 }}
              >
                ₦
              </Typography>
            </InputAdornment>
          }
          inputProps={{ inputMode: "numeric" }}
          fullWidth
        />
        <Typography sx={{ color: "#aaa", flexShrink: 0 }}>—</Typography>
        <PriceInput
          value={local[1].toLocaleString("en-NG")}
          onChange={handleMaxInput}
          startAdornment={
            <InputAdornment position="start">
              <Typography
                sx={{ color: COLORS.bg, fontWeight: 700, fontSize: 14 }}
              >
                ₦
              </Typography>
            </InputAdornment>
          }
          inputProps={{ inputMode: "numeric" }}
          fullWidth
        />
      </Box>

      {/* Slider */}
      <Box sx={{ px: 0.5, mb: 0.5 }}>
        <PriceSlider
          value={local}
          onChange={handleSlider}
          min={MIN}
          max={MAX}
          step={10_000}
          disableSwap
        />
      </Box>

      {/* Range labels */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography sx={{ fontSize: 12, color: "#9e9e9e" }}>₦0</Typography>
        <Typography sx={{ fontSize: 12, color: "#9e9e9e" }}>
          ₦500,000,000
        </Typography>
      </Box>

      {/* Apply button */}
      <Button
        fullWidth
        onClick={handleApply}
        sx={{
          backgroundColor: COLORS.bg,
          color: "#fff",
          fontWeight: 700,
          fontSize: 15,
          borderRadius: "50px",
          py: 1.5,
          textTransform: "none",
          "&:hover": { backgroundColor: COLORS.bgHover },
        }}
      >
        Apply Filter
      </Button>
    </Popover>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const PropertySearchBar = () => {
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN, MAX]);
  const [priceOpen, setPriceOpen] = useState(false);
  const [priceAnchorEl, setPriceAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <Box>
      <SearchBar>
        {/* ── Location ── */}
        <FieldWrapper>
          <GreenIcon>
            <PlaceOutlinedIcon />
          </GreenIcon>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              minWidth: 0,
              flex: 1,
            }}
          >
            <FieldLabel>Location</FieldLabel>
            <StyledInput
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              fullWidth
            />
          </Box>
        </FieldWrapper>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5, borderColor: "#e8e8e8" }}
        />

        {/* ── Type ── */}
        <FieldWrapper>
          <GreenIcon>
            <OtherHousesOutlinedIcon />
          </GreenIcon>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              minWidth: 0,
              flex: 1,
            }}
          >
            <FieldLabel>Type</FieldLabel>
            <StyledSelect
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value as string)}
              variant="outlined"
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Duplex">Duplex</MenuItem>
              <MenuItem value="Studio">Studio</MenuItem>
              <MenuItem value="Penthouse">Penthouse</MenuItem>
              <MenuItem value="Land">Land</MenuItem>
            </StyledSelect>
          </Box>
        </FieldWrapper>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5, borderColor: "#e8e8e8" }}
        />

        {/* ── Price Range ── */}
        <FieldWrapper
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            setPriceAnchorEl(e.currentTarget as HTMLElement);
            setPriceOpen((p) => !p);
          }}
          sx={{ userSelect: "none" }}
        >
          <GreenIcon>
            <CurrencyExchangeIcon />
          </GreenIcon>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              minWidth: 0,
              flex: 1,
            }}
          >
            <FieldLabel>Price</FieldLabel>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 700,
                color: COLORS.dark,
                lineHeight: 1.3,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {shortLabel(priceRange[0], priceRange[1])}
            </Typography>
          </Box>
          <Box sx={{ color: Palette.primary.dark, display: "flex", ml: 0.5 }}>
            {priceOpen ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </Box>
        </FieldWrapper>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5, borderColor: "#e8e8e8" }}
        />

        {/* ── Search Button ── */}
        <SearchButton disableRipple onClick={() => {}}>
          <SearchIcon />
        </SearchButton>
      </SearchBar>

      {/* ── Price Popover ── */}
      <PriceRangePopover
        anchorEl={priceAnchorEl}
        open={priceOpen}
        onClose={() => setPriceOpen(false)}
        range={priceRange}
        onChange={setPriceRange}
      />
    </Box>
  );
};

export default PropertySearchBar;
