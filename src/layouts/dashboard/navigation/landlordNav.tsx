import {
  MdDashboard,
  MdHomeWork,
  MdAddHome,
  MdVisibility,
  MdBookOnline,
  MdPayments,
  MdVerifiedUser,
  MdSettings,
} from "react-icons/md";
import type { NavItem } from "./types";
import { VpnKeyOutlined, EventNoteRounded } from "@mui/icons-material";

// Items with `children` render as an expandable group in the sidebar.
export const LANDLORD_NAV: NavItem[] = [
  { label: "Dashboard", path: "/dashboard/landlord", icon: MdDashboard },
  {
    label: "My Properties",
    path: "#",
    icon: MdHomeWork,
    children: [
      {
        label: "Add Property",
        path: "/dashboard/landlord/add/property",
        icon: MdAddHome,
      },
      {
        label: "View Properties",
        path: "/dashboard/landlord/view/properties",
        icon: MdVisibility,
      },
    ],
  },
  {
    label: "Bookings",
    path: "/dashboard/view/bookings",
    icon: MdBookOnline,
    children: [
      {
        label: "Active Rentals",
        path: "/dashboard/landlord/active-properties",
        icon: VpnKeyOutlined,
      },
      {
        label: "Inspections",
        path: "/dashboard/landlord/inspections",
        icon: EventNoteRounded,
      },
    ],
  },
  { label: "Payments", path: "/dashboard/landlord/payments", icon: MdPayments },
  {
    label: "Verifications",
    path: "/dashboard/landlord/verifications",
    icon: MdVerifiedUser,
  },
  { label: "Settings", path: "/dashboard/landlord/settings", icon: MdSettings },
];
