import { useLocation } from "react-router-dom";
import { Header, Footer } from "../../components/public";
import { type ReactNode } from "react";

import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

function PublicLayout({ children }: LayoutProps) {
  const location = useLocation();

  const noLayoutRoutes = [
    "/auth/login",
    "/auth/onboarding",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verify-email",
    "/auth/otp-verify",
  ];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        {!hideLayout && <Header />}
        {children}
        {!hideLayout && <Footer />}
      </Box>
    </>
  );
}

export default PublicLayout;
