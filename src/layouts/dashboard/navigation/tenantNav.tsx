import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AddHomeIcon from "@mui/icons-material/AddHome";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PaymentsIcon from "@mui/icons-material/Payments";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SettingsIcon from "@mui/icons-material/Settings";

export const TENANT_NAV = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
    children: [],
  },
  {
    label: "My Properties",
    path: "#",
    icon: HomeWorkIcon,
    children: [
      {
        label: "Add Property",
        path: "/dashboard/add/property",
        icon: AddHomeIcon,
      },
      {
        label: "View Properties",
        path: "/dashboard/view/properties",
        icon: VisibilityIcon,
      },
    ],
  },
  {
    label: "Bookings",
    path: "/dashboard/view/bookings",
    icon: BookOnlineIcon,
    children: [],
  },
  {
    label: "Payments",
    path: "/dashboard/admin/customers",
    icon: PaymentsIcon,
    children: [],
  },
  {
    label: "Verifications",
    path: "#",
    icon: VerifiedUserIcon,
    children: [],
  },
  {
    label: "Settings",
    path: "#",
    icon: SettingsIcon,
    children: [],
  },
];
