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

export const LANDLORD_NAV: NavItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard/landlord",
    icon: MdDashboard,
    children: [],
  },
  {
    label: "My Properties",
    path: "#",
    icon: MdHomeWork,
    children: [
      {
        label: "Add Property",
        path: "/dashboard/add/property",
        icon: MdAddHome,
      },
      {
        label: "View Properties",
        path: "/dashboard/view/properties",
        icon: MdVisibility,
      },
    ],
  },
  {
    label: "Bookings",
    path: "/dashboard/view/bookings",
    icon: MdBookOnline,
    children: [],
  },
  {
    label: "Payments",
    path: "/dashboard/admin/customers",
    icon: MdPayments,
    children: [],
  },
  {
    label: "Verifications",
    path: "#",
    icon: MdVerifiedUser,
    children: [],
  },
  {
    label: "Settings",
    path: "#",
    icon: MdSettings,
    children: [],
  },
];
