import DashboardLayout from "../layouts/dashboard";
import TenantRoutes from "./tenant";
import LandlordRoutes from "./landlord";

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <TenantRoutes />
      <LandlordRoutes />
    </DashboardLayout>
  );
};

export default DashboardRoutes;
