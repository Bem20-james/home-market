import { TENANT_NAV } from "../layouts/dashboard/navigation/tenantNav";
import { LANDLORD_NAV } from "../layouts/dashboard/navigation/landlordNav";
import { ROLES } from "../config/constants";

export const getNav = (user) => {
  if (!user) return [];
  console.log("Getting nav for user:", user);

  const role = user.role;

  if (role === ROLES.ADMIN) {
    return LANDLORD_NAV;
  }

  if (user.role === ROLES.LANDLORD) return LANDLORD_NAV;
  if (user.role === ROLES.TENANT) return TENANT_NAV;

  return [];
};
