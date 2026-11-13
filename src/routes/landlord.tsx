import { Routes, Route } from "react-router-dom";
import {
  LandlordOverview,
  ActiveRentals,
  InspectionPage,
  SettingsPage,
  VerificationPage,
  PropertiesPage,
  AddProperties,
} from "../pages/landlord";
import { PaymentsPage } from "../pages/tenant";

const LandlordRoutes = () => {
  return (
    <Routes>
      <Route path="/landlord" element={<LandlordOverview />} />
      <Route path="/landlord/add/properties" element={<LandlordOverview />} />
      <Route path="/landlord/view/properties" element={<PropertiesPage />} />
      <Route path="/landlord/active-properties" element={<ActiveRentals />} />
      <Route path="/landlord/inspections" element={<InspectionPage />} />
      <Route path="/landlord/verifications" element={<VerificationPage />} />
      <Route path="/landlord/payments" element={<PaymentsPage />} />
      <Route path="/landlord/settings" element={<SettingsPage />} />
      <Route path="/landlord/settings" element={<AddProperties />} />
    </Routes>
  );
};

export default LandlordRoutes;
