import { useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Palette } from "../../../config/colors";
import { getNav } from "../../../utils/getNav";
import { useSelector } from "react-redux";
import { type RootState } from "../../../store";

const NavigationMenu = ({ open }: { open: boolean }) => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);
  const navItems = getNav(user);

  return (
    <Box>
      <List>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    my: 0.5,
                    mx: 1,
                    borderRadius: 2,
                    backgroundColor: isActive
                      ? Palette.primary.main
                      : "#ffffff",
                    transform: isActive ? "scale(1.02)" : "none",
                    "&:hover": {
                      backgroundColor: Palette.primary.default,
                      my: 1,
                      mx: 1,
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                      color: isActive
                        ? Palette.primary.light
                        : Palette.primary.light,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: isActive
                          ? Palette.primary.default
                          : Palette.primary.default,
                        p: 1,
                        borderRadius: 20,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {Icon && <Icon fontSize="small" />}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      opacity: open ? 1 : 0,
                      "& .MuiListItemText-primary": {
                        fontSize: ".8rem",
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive
                          ? Palette.primary.light
                          : Palette.primary.dark,
                        "&:hover": {
                          color: Palette.primary.dark,
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default NavigationMenu;
