import { Box, IconButton, Typography } from "@mui/material";
import MoreHorizRounded from "@mui/icons-material/MoreHorizRounded";
import { type Status, StatusBadge } from "../../../components/dashboard/ui";
import { type Column } from "../../../components/dashboard/DataTable";
import { type InspectionRequest } from "../../../components/dashboard/UpcomingInspections";

/* ---- sample data: replace with your API data ---- */
interface ListedProperty {
  id: number;
  name: string;
  location: string;
  image?: string;
  rent: string;
  status: Extract<Status, "Occupied" | "Vacant">;
}

export const properties: ListedProperty[] = [
  {
    id: 1,
    name: "Lush Heights Estate",
    location: "Victoria Island, Lagos",
    rent: "$2,500",
    status: "Occupied",
  },
  {
    id: 2,
    name: "Green View Apartments",
    location: "Kilimani, Nairobi",
    rent: "$1,200",
    status: "Vacant",
  },
  {
    id: 3,
    name: "Serene Grove House",
    location: "Sandton, Johannesburg",
    rent: "$3,800",
    status: "Occupied",
  },
];

export const requests: InspectionRequest[] = [
  {
    id: 1,
    visitor: "Kwame Osei",
    property: "Lush Heights Estate",
    when: "Tomorrow, 10:00 AM",
  },
  {
    id: 2,
    visitor: "Amina Mohammed",
    property: "Green View Apartments",
    when: "Oct 24, 02:30 PM",
  },
];

export const columns: Column<ListedProperty>[] = [
  {
    key: "property",
    header: "Property",
    render: (r) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
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
    key: "rent",
    header: "Rent",
    render: (r) => (
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 700,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {r.rent}
        <Typography
          component="span"
          sx={{ fontSize: 12, fontWeight: 400, color: "text.disabled" }}
        >
          /mo
        </Typography>
      </Typography>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (r) => <StatusBadge status={r.status} />,
  },
  {
    key: "actions",
    header: "Actions",
    align: "right",
    render: (r) => (
      <IconButton
        size="small"
        aria-label={`More actions for ${r.name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <MoreHorizRounded fontSize="small" />
      </IconButton>
    ),
  },
];
