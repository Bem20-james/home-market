import { TENANT_NAV } from "../layouts/dashboard/navigation/tenantNav";
import { LANDLORD_NAV } from "../layouts/dashboard/navigation/landlordNav";
import { ROLES } from "../config/constants";
import type { User } from "../types/authTypes";
import type { NavItem } from "../layouts/dashboard/navigation/types";
 
// Adjust these string literals to match whatever role values your backend
// actually sends on the User object.
export function getNav(user: User | null | undefined): NavItem[] {
  switch (user?.role) {
    case ROLES.LANDLORD:
      return LANDLORD_NAV;
    case ROLES.TENANT:
      return TENANT_NAV;
    default:
      return [];
  }
}