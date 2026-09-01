import { Box, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import { sideNavPaperStyles } from "./data";

interface SideNavProps {
  width: number;
}

function SideNav({ width }: SideNavProps) {
  return (
    <Drawer
      variant="permanent"
      sx={[
        // was sideNavPaperStyles(width) - see MobileSideNav for the same fix
        sideNavPaperStyles({ width }),
        { display: { xs: "none", sm: "block" } },
      ]}
      open
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ display: "flex", margin: "auto" }}>
          <Link to="/">
            <img
              src="/logo-v2.png"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                marginTop: "10px",
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

export default SideNav;
