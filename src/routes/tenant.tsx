import { Routes, Route } from "react-router-dom";
import { TenantOverview } from "../pages/tenant";

const TenantRoutes = () => {
  return (
    <Routes>
      <Route path="/tenant" element={<TenantOverview />} />
    </Routes>
  );
};

export default TenantRoutes;
