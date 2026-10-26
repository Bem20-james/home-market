import { Routes, Route } from "react-router-dom";
import { LandlordOverview } from "../pages/landlord";

const LandlordRoutes = () => {
  return (
    <Routes>
      <Route path="/landlord" element={<LandlordOverview />} />
    </Routes>
  );
};

export default LandlordRoutes;
