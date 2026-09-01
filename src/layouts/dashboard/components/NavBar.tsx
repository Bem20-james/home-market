import { useState, type MouseEvent } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  Logout,
  WavingHandOutlined,
} from "@mui/icons-material";
import NotificationMenu from "./NotificationMenu";
import UserAvatar from "./UserAvatar";
import MenuBox from "./MenuBox";
import { Palette } from "../../../config/colors";
import { getTimeGreeting, getFormattedDate } from "../../../utils/functions";
import { useUserContext } from "../../../contexts";
import { useLogout } from "../../../hooks/useAuth";

interface NavBarProps {
  sideNavWidth: number;
  layoutPadding: number;
  navHeight: number;
  onMenuClick: () => void;
}

const NavBar = ({
  sideNavWidth,
  layoutPadding,
  navHeight,
  onMenuClick,
}: NavBarProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] =
    useState<HTMLElement | null>(null);

  // useUserContext() already returns the User object as `user` - there is
  // no nested `.user` on it (that was leftover from an earlier bug).
  const { user } = useUserContext();

  const logoutMutation = useLogout();

  const handleSettingsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClick = (event: MouseEvent<HTMLElement>) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  const handleLogout = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    logoutMutation.mutate();
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        pl: {
          xs: `${layoutPadding}px`,
          md: `${sideNavWidth + layoutPadding}px`,
        },
        pr: `${layoutPadding}px`,
        height: `${navHeight}px`,
        backgroundColor: "#FFF",
        boxShadow: "0 2px 6px rgba(200, 200, 200, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 99,
      }}
    >
      <Stack sx={{ direction: "row", alignItems: "center" }}>
        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 24 },
                fontWeight: 700,
                color: "#000",
                textTransform: "capitalize",
              }}
            >
              {getTimeGreeting()}, {user?.last_name}
            </Typography>
            <WavingHandOutlined
              sx={{
                fontSize: { xs: 20, md: 30 },
                mt: -0.5,
                color: Palette.primary.default,
              }}
            />
          </Stack>
          <Typography
            sx={{ display: { xs: "none", md: "block" }, fontSize: 12 }}
          >
            {getFormattedDate()}
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction="row"
        sx={{ gap: { xs: 2, md: 4 }, alignItems: "center" }}
      >
        <Box onClick={handleNotificationsClick}>
          <MenuBox icon={<Notifications />} count={3} />
        </Box>

        <NotificationMenu
          anchorEl={notificationsAnchorEl}
          open={Boolean(notificationsAnchorEl)}
          onClose={handleNotificationsClose}
        />

        <UserAvatar
          onClick={handleSettingsClick}
          initial={user?.last_name?.[0]}
        />

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Stack>
    </Box>
  );
};

export default NavBar;
