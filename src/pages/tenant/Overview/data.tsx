import { Box, IconButton, Typography } from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
import { type Status, StatusBadge } from "../../../components/dashboard/ui";
import { type Column } from "../../../components/dashboard/DataTable";
import { type Property } from "../../../components/dashboard/RecommendedProps";
import { type Rental } from "../../../components/dashboard/ActiveRentals";

interface Inspection {
  id: number;
  name: string;
  location: string;
  image?: string;
  date: string;
  time: string;
  status: Status;
}

export const inspections: Inspection[] = [
  {
    id: 1,
    name: "Urban Oasis Loft",
    location: "Ikeja, Lagos",
    date: "Oct 24, 2024",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Terrace Villa 4",
    location: "Victoria Island",
    date: "Oct 26, 2024",
    time: "02:00 PM",
    status: "Pending",
  },
];

export const columns: Column<Inspection>[] = [
  {
    key: "property",
    header: "Property",
    render: (r) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            flexShrink: 0,
            borderRadius: 1.5,
            overflow: "hidden",
            background: "linear-gradient(135deg,#E2E8F0,#CBD5E1)",
          }}
        >
          {r.image && (
            <Box
              component="img"
              src={r.image}
              alt=""
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography noWrap sx={{ fontSize: 14, fontWeight: 700 }}>
            {r.name}
          </Typography>
          <Typography noWrap variant="caption" color="text.secondary">
            {r.location}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    key: "when",
    header: "Date & time",
    render: (r) => (
      <>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{r.date}</Typography>
        <Typography variant="caption" color="text.secondary">
          {r.time}
        </Typography>
      </>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (r) => <StatusBadge status={r.status} />,
  },
  {
    key: "action",
    header: "Action",
    align: "right",
    render: (r) => (
      <IconButton
        size="small"
        aria-label={`More actions for ${r.name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <MoreVertRounded fontSize="small" />
      </IconButton>
    ),
  },
];

export const recommended: Property[] = [
  {
    id: 1,
    title: "Garden Studio Flat",
    price: "$1,200",
    beds: 2,
    baths: 1,
    sqft: 850,
    saved: true,
    image: "/home/slide4.jpg",
  },
  {
    id: 2,
    title: "Skyline View Condo",
    price: "$1,850",
    beds: 3,
    baths: 2,
    sqft: 1200,
    verified: true,
    image: "/home/slide5.jpg",
  },
];

export const rental: Rental = {
  name: "The Penthouse Suite, Tower A",
  address: "Lekki Phase 1, Lagos",
  nextPaymentDate: "Nov 1st",
  amount: "$2,400",
  leaseProgress: 58,
  leaseLabel: "7 of 12 months",
};
