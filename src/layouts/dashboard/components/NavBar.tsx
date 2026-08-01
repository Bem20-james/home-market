import { useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { Menu as MenuIcon, Notifications, Logout } from "@mui/icons-material";
import NotificationsMenu from "./NotificationMenu";
import UserAvatar from "./UserAvatar";
import MenuBox from "./MenuBox";
import { WavingHandOutlined } from "@mui/icons-material";
import { Palette } from "../../../config/colors";
import { getTimeGreeting, getFormattedDate } from "../../../utils/functions";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts";
import { useDispatch } from "react-redux";
import { useLogout } from "../../../hooks/useAuth";
import { logout } from "../../../store/authSlice";

const NavBar = ({ sideNavWidth, layoutPadding, navHeight, onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { user } = useUserContext();
  const userInfo = user?.user;

  const logoutUser = useLogout();

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClick = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    logoutUser();

    dispatch(logout());
    handleMenuClose();
    navigate("/login", { replace: true });
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
              {getTimeGreeting()}, {userInfo?.last_name}
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

        <NotificationsMenu
          anchorEl={notificationsAnchorEl}
          open={Boolean(notificationsAnchorEl)}
          onClose={handleNotificationsClose}
        />

        <UserAvatar
          onClick={handleSettingsClick}
          initial={userInfo?.last_name?.[0]}
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
