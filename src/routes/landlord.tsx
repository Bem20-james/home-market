import { Routes, Route } from "react-router-dom";
import { LandlordOverview } from "../pages/landlord";

const LandlordRoutes = () => {
  return (
    <Routes>
      <Route path="/landlord/overview" element={<LandlordOverview />} />
    </Routes>
  );
};

export default LandlordRoutes;
