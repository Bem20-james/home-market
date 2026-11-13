import { MdDashboard } from "react-icons/md";
import type { NavItem } from "./types";
import {
  HolidayVillageOutlined,
  FavoriteOutlined,
  AssignmentOutlined,
  PaymentsOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

// NOTE: this currently mirrors LANDLORD_NAV item-for-item (including
// "Add Property" / "View Properties", which reads like a landlord-only
// action). Swap in the tenant-appropriate paths/labels when you have them -
// keeping the structure/typing so it's a content-only change.
export const TENANT_NAV: NavItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard/tenant",
    icon: MdDashboard,
    children: [],
  },
  {
    label: "My properties",
    path: "/dashboard/tenant/my-properties",
    icon: HolidayVillageOutlined,
    children: [],
  },
  {
    label: "Saved",
    path: "/dashboard/tenant/saved-properties",
    icon: FavoriteOutlined,
    children: [],
  },
  {
    label: "Inspections",
    path: "/dashboard/tenant/inspections",
    icon: AssignmentOutlined,
    children: [],
  },
  {
    label: "Payments",
    path: "/dashboard/tenant/payments",
    icon: PaymentsOutlined,
    children: [],
  },

  {
    label: "Settings",
    path: "/dashboard/tenant/settings",
    icon: SettingsOutlined,
    children: [],
  },
];
