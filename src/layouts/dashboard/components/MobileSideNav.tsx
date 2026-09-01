import { Box, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { sideNavPaperStyles } from "./data";
import NavigationMenu from "./NavigationMenu";

interface MobileSideNavProps {
  open: boolean;
  width: number;
  onClose: () => void;
  onTransitionEnd: () => void;
}

function MobileSideNav({
  open,
  width,
  onClose,
  onTransitionEnd,
}: MobileSideNavProps) {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onTransitionEnd={onTransitionEnd}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={[
        // was sideNavPaperStyles(width) - the function expects
        // { width: number }, not a bare number, so the styles were
        // silently never applying
        sideNavPaperStyles({ width }),
        {
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width,
          },
        },
      ]}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <div style={{ display: "flex", margin: "auto" }}>
          <Link to="/">
            <img
              src="/logo.png"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                marginTop: "5px",
              }}
              alt="Bmg Logo"
            />
          </Link>
        </div>
        <NavigationMenu />
      </Box>
    </Drawer>
  );
}

export default MobileSideNav;
