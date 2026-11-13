import { Fragment, useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Palette } from "../../../config/colors";
import { useUserContext } from "../../../contexts";
import { getNav } from "../../../utils/getNav";
import type { NavItem } from "../navigation/types";

interface NavigationMenuProps {
  /**
   * true  -> labels shown; groups expand inline (SideNav open, MobileSideNav)
   * false -> icon-only rail; groups open as a flyout menu beside the icon
   */
  open: boolean;
  /** Called after a link is chosen, e.g. to close the mobile drawer. */
  onNavigate?: () => void;
}

// ---- the sidebar's existing look, shared by every row ----
const rowSx = (
  isActive: boolean,
  open: boolean,
  nested = false,
): SxProps<Theme> => ({
  borderRadius: "10px",
  minHeight: nested ? 40 : 44,
  ...(nested ? { pl: 4.5, pr: 1.5 } : { px: open ? 1.5 : 1 }),
  justifyContent: open ? "flex-start" : "center",
  backgroundColor: isActive ? Palette.primary.main : "transparent",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.2s ease",
  "&::before": isActive
    ? {}
    : {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "10px",
        background: `${Palette.primary.main}10`,
        opacity: 0,
        transition: "opacity 0.2s",
      },
  "&:hover": {
    backgroundColor: isActive
      ? Palette.primary.main
      : `${Palette.primary.main}10`,
    "&::before": { opacity: 1 },
  },
});

const iconSx = (isActive: boolean, open: boolean): SxProps<Theme> => ({
  minWidth: 0,
  mr: open ? 1.5 : 0,
  justifyContent: "center",
  color: isActive ? "#fff" : Palette.primary.main,
});

const labelSx = (isActive: boolean, nested = false): SxProps<Theme> => ({
  fontSize: nested ? "0.8rem" : "0.85rem",
  fontWeight: isActive ? 600 : 500,
  color: isActive ? "#fff" : "#3d3d5c",
  letterSpacing: "0.01em",
});

const NavigationMenu = ({ open, onNavigate }: NavigationMenuProps) => {
  const { pathname } = useLocation();
  const { user } = useUserContext();
  const navItems = getNav(user);

  // The group that contains the page we're on (if any).
  const activeGroup =
    navItems.find((item) => item.children?.some((c) => c.path === pathname))
      ?.label ?? null;

  // Inline accordion: one group open at a time.
  const [expanded, setExpanded] = useState<string | null>(activeGroup);

  // Rail mode: the flyout keeps its last item/anchor while fading out, so
  // `flyoutOpen` is separate from `flyout`.
  const [flyout, setFlyout] = useState<{
    anchor: HTMLElement;
    item: NavItem;
  } | null>(null);
  const [flyoutOpen, setFlyoutOpen] = useState(false);

  // Flyouts only exist in the rail - drop them when the sidebar expands or
  // the route changes. Defer the reset to a microtask so this does not trigger
  // a synchronous state update during render synchronization.
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setFlyoutOpen(false);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [open, pathname]);

  return (
    <>
      <List disablePadding>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const children = item.children ?? [];
          const rowKey = `${item.label}-${index}`;

          // ---------- plain link ----------
          if (children.length === 0) {
            const isActive = pathname === item.path;

            return (
              <ListItem key={rowKey} disablePadding sx={{ px: 1.5, py: 0.3 }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={onNavigate}
                  aria-label={open ? undefined : item.label}
                  aria-current={isActive ? "page" : undefined}
                  sx={rowSx(isActive, open)}
                >
                  <ListItemIcon sx={iconSx(isActive, open)}>
                    <Icon size={20} />
                  </ListItemIcon>
                  {open && (
                    <ListItemText
                      primary={
                        <Typography component="span" sx={labelSx(isActive)}>
                          {item.label}
                        </Typography>
                      }
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          }

          // ---------- group (has children) ----------
          const groupId = `nav-group-${index}`;
          const isExpanded = open && expanded === item.label;
          const hasActiveChild = children.some((c) => c.path === pathname);
          // Highlight the group itself only while its children are hidden;
          // when expanded, the active child carries the highlight.
          const isActive = hasActiveChild && !isExpanded;
          const isFlyoutOpen = flyoutOpen && flyout?.item.label === item.label;

          return (
            <Fragment key={rowKey}>
              <ListItem disablePadding sx={{ px: 1.5, py: 0.3 }}>
                <ListItemButton
                  aria-label={open ? undefined : item.label}
                  aria-haspopup={open ? undefined : "menu"}
                  aria-expanded={open ? isExpanded : isFlyoutOpen}
                  aria-controls={open ? groupId : undefined}
                  onClick={(e: MouseEvent<HTMLElement>) => {
                    if (open) {
                      setExpanded(isExpanded ? null : item.label);
                    } else {
                      setFlyout({ anchor: e.currentTarget, item });
                      setFlyoutOpen(true);
                    }
                  }}
                  sx={rowSx(isActive, open)}
                >
                  <ListItemIcon sx={iconSx(isActive, open)}>
                    <Icon size={20} />
                  </ListItemIcon>
                  {open && (
                    <>
                      <ListItemText
                        primary={
                          <Typography component="span" sx={labelSx(isActive)}>
                            {item.label}
                          </Typography>
                        }
                      />
                      <ExpandMoreIcon
                        sx={{
                          fontSize: 18,
                          color: isActive ? "#fff" : "#9a9ab0",
                          transition: "transform 0.2s",
                          transform: isExpanded
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </>
                  )}
                </ListItemButton>
              </ListItem>

              {open && (
                <Collapse
                  component="li"
                  in={isExpanded}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding id={groupId} aria-label={item.label}>
                    {children.map((child) => {
                      const ChildIcon = child.icon;
                      const childActive = pathname === child.path;

                      return (
                        <ListItem
                          key={child.path}
                          disablePadding
                          sx={{ px: 1.5, py: 0.2 }}
                        >
                          <ListItemButton
                            component={Link}
                            to={child.path}
                            onClick={onNavigate}
                            aria-current={childActive ? "page" : undefined}
                            sx={rowSx(childActive, true, true)}
                          >
                            <ListItemIcon sx={iconSx(childActive, true)}>
                              <ChildIcon size={18} />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  component="span"
                                  sx={labelSx(childActive, true)}
                                >
                                  {child.label}
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Fragment>
          );
        })}
      </List>

      {/* Rail mode: a group opens as a menu beside its icon. */}
      <Menu
        open={flyoutOpen}
        anchorEl={flyout?.anchor ?? null}
        onClose={() => setFlyoutOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              ml: 1,
              minWidth: 200,
              borderRadius: "12px",
              border: "1px solid #f0f0f5",
              boxShadow: "0 12px 40px rgba(0,0,0,0.11)",
            },
          },
        }}
      >
        <ListSubheader
          component="div"
          sx={{
            lineHeight: "32px",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "#9a9ab0",
          }}
        >
          {flyout?.item.label}
        </ListSubheader>
        {flyout?.item.children?.map((child) => {
          const ChildIcon = child.icon;

          return (
            <MenuItem
              key={child.path}
              component={Link}
              to={child.path}
              selected={pathname === child.path}
              onClick={() => {
                setFlyoutOpen(false);
                onNavigate?.();
              }}
            >
              <ListItemIcon
                sx={{ color: Palette.primary.main, minWidth: 0, mr: 1.5 }}
              >
                <ChildIcon size={18} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "#3d3d5c",
                    }}
                  >
                    {child.label}
                  </Typography>
                }
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default NavigationMenu;
