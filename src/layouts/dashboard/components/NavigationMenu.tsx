import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Palette } from "../../../config/colors";
import { ActiveLink, InActiveLink } from "./CustomLink";
import { useUserContext } from "../../../contexts";
import { useNavigate } from "react-router-dom";
import { getNav } from "../../../utils/getNav";

function NavigationMenu() {
  const currentPath = window.location.pathname;
  const [openItemIndex, setOpenItemIndex] = useState(null);
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const navItems = getNav(user?.user);
  const toggleItem = (index) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };

  return (
    <Box>
      {navItems.map((cell, i) => (
        <Box key={i}>
          <ActiveLink
            onClick={() => toggleItem(i)}
            to={cell.path}
            isactive={cell.path == currentPath}
          >
            <EmojiIcon
              name={cell.icon}
              styles={{
                color:
                  openItemIndex == i
                    ? Palette.primary.main
                    : Palette.primary.default,
              }}
            />
            {cell.label}
          </ActiveLink>
          {openItemIndex === i && cell.children && cell.children.length > 0 && (
            <Box sx={{ pl: 2, mt: 1 }}>
              {cell.children.map((child, i) => (
                <InActiveLink
                  key={i}
                  to={child.path}
                  isactive={child.path == currentPath}
                >
                  <EmojiIcon name={child.icon} />
                  {child.label}
                </InActiveLink>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default NavigationMenu;
