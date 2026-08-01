/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Palette } from "../../config/colors";
import { useUserContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { NavBar, MobileSideNav, SideNav } from "./components";

const SIDE_NAV_WIDTH = 210;
const LAYOUT_PADDING = 20;
const NAV_HEIGHT = 80;

function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { user } = useUserContext();

  const role = user?.role;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

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
          role={role}
          onClose={handleDrawerClose}
          onTransitionEnd={handleSideNavTransitionEnd}
        />

        {/* Desktop Drawer */}
        <SideNav width={SIDE_NAV_WIDTH} role={role} />
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
