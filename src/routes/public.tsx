import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/public";
import {
  AboutPage,
  HomePage,
  ListingPage,
  LoginPage,
  RegisterPage,
} from "../pages/public";
import ScrollToTop from "../utils/scrollToTop";

const PublicRoutes = () => {
  return (
    <Layout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/auth/onboarding" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
