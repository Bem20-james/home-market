import type { ReactNode } from "react";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import { type Role } from "../../../types/authTypes";

interface RoleOption {
  value: Role;
  title: string;
  description: string;
  icon: ReactNode;
}

export const OPTIONS: { group: string; items: RoleOption[] }[] = [
  {
    group: "I'm looking for a property",
    items: [
      {
        value: "tenant",
        title: "Tenant",
        description:
          "Browse verified listings, save favourites and book viewings.",
        icon: <KeyRoundedIcon />,
      },
    ],
  },
  {
    group: "I'm listing a property",
    items: [
      {
        value: "landlord",
        title: "Landlord",
        description:
          "Own a property? Find reliable tenants and manage enquiries.",
        icon: <ApartmentRoundedIcon />,
      },
      {
        value: "agent",
        title: "Agent",
        description: "Represent owners and list properties on their behalf.",
        icon: <SupportAgentRoundedIcon />,
      },
    ],
  },
];
