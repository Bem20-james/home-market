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
        value: "agent",
        title: "Agent",
        description:
          "Own a property? Represent owners? Find reliable tenants, manage enquiries or list properies on behalf of owners.",
        icon: <SupportAgentRoundedIcon />,
      },
      {
        value: "developers",
        title: "Developers",
        description: "Represent owners and list properties on their behalf.",
        icon: <ApartmentRoundedIcon />,
      },
    ],
  },
];
