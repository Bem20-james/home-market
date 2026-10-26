import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Palette } from "../../../config/colors";
import { getNav } from "../../../utils/getNav";
import { useSelector } from "react-redux";
import { type RootState } from "../../../store";

const MOBILE_DRAWER_WIDTH = 260;

interface MobileSideNavProps {
  open: boolean;
  onClose: () => void;
}

function MobileSideNav({ open, onClose }: MobileSideNavProps) {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);
  const navItems = getNav(user);

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          width: MOBILE_DRAWER_WIDTH,
          background: "#ffffff",
          borderRight: "none",
          boxShadow: "8px 0 40px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            px: 2,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 70,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="img"
              src={"/logo.png"}
              sx={{ width: { xs: 140, sm: 100, md: 200 }, height: "auto" }}
            />
          </Box>

          <IconButton
            size="small"
            onClick={onClose}
            sx={{
              color: "#999",
              background: "#f7f7fc",
              borderRadius: "8px",
              "&:hover": { background: "#ebebf5" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#f0f0f5" }} />

        <Box sx={{ flex: 1, py: 1.5, overflowY: "auto" }}>
          <List disablePadding>
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <ListItem key={index} disablePadding sx={{ px: 1.5, py: 0.25 }}>
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", width: "100%" }}
                    onClick={onClose}
                  >
                    <ListItemButton
                      sx={{
                        borderRadius: "10px",
                        minHeight: 46,
                        px: 1.5,
                        backgroundColor: isActive
                          ? Palette.primary.main
                          : "transparent",
                        "&:hover": {
                          backgroundColor: isActive
                            ? Palette.primary.main
                            : `${Palette.primary.main}10`,
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: 1.5,
                          color: isActive ? "#fff" : Palette.primary.main,
                        }}
                      >
                        {Icon && <Icon fontSize="small" />}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            component="span"
                            sx={{
                              fontSize: "0.87rem",
                              fontWeight: isActive ? 600 : 500,
                              color: isActive ? "#fff" : "#3d3d5c",
                            }}
                          >
                            {item.label}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Divider sx={{ borderColor: "#f0f0f5" }} />

        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              borderRadius: "14px",
              background: `linear-gradient(135deg, ${Palette.primary.main}12 0%, ${Palette.primary?.main || "#6366f1"}12 100%)`,
              border: `1px solid ${Palette.primary.main}25`,
              p: 2,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
            >
              <RocketLaunchIcon
                sx={{ fontSize: 14, color: Palette.primary.main }}
              />
              <Chip
                label="PRO PLAN"
                size="small"
                sx={{
                  height: 18,
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  backgroundColor: Palette.primary.main,
                  color: "#fff",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "#555",
                mb: 1.5,
                lineHeight: 1.4,
              }}
            >
              3 days left on your trial. Unlock full access.
            </Typography>
            <Box
              component="button"
              sx={{
                width: "100%",
                py: 0.8,
                border: "none",
                borderRadius: "8px",
                background: Palette.primary.main,
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": { opacity: 0.9 },
              }}
            >
              Upgrade Now
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default MobileSideNav;
