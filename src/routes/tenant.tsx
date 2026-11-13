import { Routes, Route } from "react-router-dom";
import {
  ActiveProperties,
  InspectionsPage,
  PaymentsPage,
  SavedProperties,
  SettingsPage,
  TenantOverview,
} from "../pages/tenant";

const TenantRoutes = () => {
  return (
    <Routes>
      <Route path="/tenant" element={<TenantOverview />} />
      <Route path="/tenant/saved-properties" element={<SavedProperties />} />
      <Route path="/tenant/my-properties" element={<ActiveProperties />} />
      <Route path="/tenant/inspections" element={<InspectionsPage />} />
      <Route path="/tenant/payments" element={<PaymentsPage />} />
      <Route path="/tenant/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default TenantRoutes;
