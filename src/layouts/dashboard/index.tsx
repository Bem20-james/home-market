import { useState, useEffect, type ReactNode } from "react";
import { Box } from "@mui/material";
import { Palette } from "../../config/colors";
import { useUserContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { NavBar, MobileSideNav, SideNav } from "./components";

const SIDE_NAV_WIDTH = 210;
const LAYOUT_PADDING = 20;
const NAV_HEIGHT = 80;

function DashboardLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    // If you wrap your app in redux-persist's <PersistGate loading={...}>,
    // this only runs after rehydration has actually finished, so a
    // logged-in user on page refresh won't get bounced to /login for a
    // false-negative "no user yet" tick.
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleSideNavTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleSideNavToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Avoid flashing the protected layout for a frame before the redirect
  // effect fires.
  if (!user) {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Navigation Bar */}
      <NavBar
        sideNavWidth={SIDE_NAV_WIDTH}
        layoutPadding={LAYOUT_PADDING}
        navHeight={NAV_HEIGHT}
        onMenuClick={handleSideNavToggle}
      />

      {/* Side Navigation */}
      <Box
        component="nav"
        sx={{
          width: { sm: SIDE_NAV_WIDTH },
          flexShrink: { sm: 0 },
        }}
        aria-label="side-navigation"
      >
        {/* Mobile Drawer */}
        <MobileSideNav
          open={mobileOpen}
          width={SIDE_NAV_WIDTH}
          onClose={handleDrawerClose}
          onTransitionEnd={handleSideNavTransitionEnd}
        />

        {/* Desktop Drawer */}
        <SideNav width={SIDE_NAV_WIDTH} />
      </Box>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flex: 1,
          boxSizing: "border-box",
          pl: `${LAYOUT_PADDING + 0}px`,
          pr: `${LAYOUT_PADDING}px`,
          pt: `${NAV_HEIGHT + LAYOUT_PADDING}px`,
          pb: `${LAYOUT_PADDING}px`,
          backgroundColor: Palette.primary.default,
          maxWidth: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
