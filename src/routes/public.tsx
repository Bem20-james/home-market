import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/public";
import { AboutPage, HomePage, ListingPage, LoginPage } from "../pages/public";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/listings" element={<ListingPage />} />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
