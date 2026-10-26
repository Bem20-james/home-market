import {
  Box,
  Stack,
  Typography,
  Avatar,
  IconButton,
  InputBase,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState, useRef } from "react";
import { Palette } from "../../../config/colors";
import { DRAWER_WIDTH_OPEN, DRAWER_WIDTH_CLOSED } from "./SideNav";
import { mockNotifications } from "./data";
import ProfileDropdown from "./ProfileDropdwn";
import NotificationsDropdown from "./NotifificationsDropdwn";
import { FontFamily } from "../../../config/fonts";

interface NavBarProps {
  open: boolean;
  toggleDrawer: () => void;
  mobileToggle?: () => void;
}

const getGreetings = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const NavBar = ({ open, toggleDrawer, mobileToggle }: NavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [greetings, setGreetings] = useState(getGreetings);

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setGreetings(getGreetings()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const openNotif = () => {
    setNotifOpen(true);
    setProfileOpen(false);
  };
  const openProfile = () => {
    setProfileOpen(true);
    setNotifOpen(false);
  };

  const handleMarkAllRead = () =>
    setNotifications((p) => p.map((n) => ({ ...n, read: true })));

  const handleMarkRead = (id: string) =>
    setNotifications((p) =>
      p.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );

  const drawerOffset = open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED;

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1100,
        left: { xs: 0, sm: `${drawerOffset}px` },
        transition:
          "left 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
        height: 70,
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: 3 },
        justifyContent: "space-between",
        background: scrolled ? "rgba(255,255,255,0.85)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid #f0f0f5",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <Stack direction="row" sx={{ gap: 1, alignItems: "flex-end" }}>
        <IconButton
          onClick={mobileToggle}
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItem: "center",
            gap: 1.5,
            color: "#3d3d5c",
            "&:hover": { background: `${Palette.primary.main}12` },
          }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            display: { xs: "none", sm: "flex" },
            color: "#3d3d5c",
            borderRadius: "8px",
            p: 1,
            backgroundColor: `${Palette.accent.main}12`,
            "&:hover": { background: `${Palette.primary.main}12` },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography
            sx={{
              fontSize: "0.88rem",
              fontWeight: 300,
              fontFamily: FontFamily.primary,
              color: "#0f0f1a",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {"Jimie Dev"}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#aaa",
              lineHeight: 1,
            }}
          >
            {greetings} 👋
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction="row"
        sx={{
          display: { xs: "flex", sm: "flex" },
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Search — desktop */}
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            alignItems: "center",
            gap: 1,
            background: "#f7f7fc",
            border: "1px solid #ebebf5",
            borderRadius: "12px",
            px: 1.5,
            py: 0.8,
            width: { xs: 200, sm: 250, md: 300 },
            transition: "all 0.2s",
            "&:focus-within": {
              border: `1px solid ${Palette.primary.main}`,
              background: "#fff",
              boxShadow: `0 0 0 3px ${Palette.primary.main}15`,
            },
          }}
        >
          <SearchIcon sx={{ fontSize: 17, color: "#aaa" }} />
          <InputBase
            placeholder="Search Properties..."
            sx={{
              fontSize: "0.82rem",
              color: "#3d3d5c",
              "& input": { p: 0 },
              "& input::placeholder": { color: "#bbb" },
            }}
          />
        </Box>

        {/* ── Notifications ── */}
        <Box ref={notifRef} sx={{ position: "relative" }}>
          <IconButton
            onClick={() => (notifOpen ? setNotifOpen(false) : openNotif())}
            sx={{
              color: "#3d3d5c",
              background: notifOpen ? `${Palette.primary.main}12` : "#f7f7fc",
              borderRadius: "10px",
              width: 38,
              height: 38,
              "&:hover": { background: `${Palette.primary.main}12` },
            }}
          >
            <Badge
              badgeContent={unreadCount}
              sx={{
                "& .MuiBadge-badge": {
                  background: Palette.accent.main,
                  color: "#fff",
                  fontSize: "0.58rem",
                  height: 16,
                  minWidth: 16,
                },
              }}
            >
              <NotificationsNoneIcon fontSize="small" />
            </Badge>
          </IconButton>

          <NotificationsDropdown
            open={notifOpen}
            onClose={() => setNotifOpen(false)}
            notifications={notifications}
            onMarkAllRead={handleMarkAllRead}
            onMarkRead={handleMarkRead}
          />
        </Box>

        {/* ── Profile ── */}
        <Box ref={profileRef} sx={{ position: "relative" }}>
          <Stack
            direction="row"
            onClick={() =>
              profileOpen ? setProfileOpen(false) : openProfile()
            }
            sx={{
              cursor: "pointer",
              pl: 0.5,
              pr: 1,
              py: 0.5,
              alignItems: "center",
              gap: 1,
              borderRadius: "10px",
              border: profileOpen
                ? `1px solid ${Palette.primary.main}40`
                : "1px solid #ebebf5",
              background: profileOpen ? "#fff" : "#f7f7fc",
              transition: "all 0.2s",
              "&:hover": {
                border: `1px solid ${Palette.primary.main}40`,
                background: "#fff",
              },
            }}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                background: `linear-gradient(135deg, ${Palette.accent.main} 0%, ${Palette.primary?.default} 100%)`,
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              {"J"}
            </Avatar>
            <Typography
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#0f0f1a",
              }}
            >
              {"Jimie"}
            </Typography>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 16,
                color: "#aaa",
                display: { xs: "none", sm: "block" },
                transition: "transform 0.2s",
                transform: profileOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Stack>

          <ProfileDropdown
            open={profileOpen}
            onClose={() => setProfileOpen(false)}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default NavBar;
