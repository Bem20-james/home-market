import { useState } from "react";
import { Box } from "@mui/material";
import { Palette } from "../../../config/colors";
import { ActiveLink, InActiveLink } from "./CustomLink";
import { useUserContext } from "../../../contexts";
import { useLocation } from "react-router-dom";
import { getNav } from "../../../utils/getNav";

function NavigationMenu() {
  // useLocation() re-renders on route change; window.location.pathname does
  // not, so active-link highlighting could go stale.
  const { pathname: currentPath } = useLocation();
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  const { user } = useUserContext();

  // Auth redirection is DashboardLayout's job (the parent already guards
  // this route) - a second copy of that logic here was redundant and had
  // its own missing-dependency bug. This component only renders once
  // DashboardLayout has confirmed there's a user.

  // user is already the User object from context - no nested `.user`.
  const navItems = getNav(user);

  const toggleItem = (index: number) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };

  return (
    <Box>
      {navItems.map((item, i) => {
        const Icon = item.icon;
        const isOpen = openItemIndex === i;

        return (
          <Box key={item.path + i}>
            <ActiveLink
              onClick={() => toggleItem(i)}
              to={item.path}
              isactive={item.path === currentPath}
            >
              <Icon
                size={18}
                color={isOpen ? Palette.primary.main : Palette.primary.default}
              />
              {item.label}
            </ActiveLink>

            {isOpen && item.children.length > 0 && (
              <Box sx={{ pl: 2, mt: 1 }}>
                {item.children.map((child, j) => {
                  const ChildIcon = child.icon;
                  return (
                    <InActiveLink
                      key={child.path + j}
                      to={child.path}
                      isactive={child.path === currentPath}
                    >
                      <ChildIcon size={16} />
                      {child.label}
                    </InActiveLink>
                  );
                })}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default NavigationMenu;
