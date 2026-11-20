import type { IconType } from "react-icons";
import type { SvgIconComponent } from "@mui/icons-material";

// A nav icon can come from either library: react-icons (IconType) or
// @mui/icons-material (SvgIconComponent). Render it with <NavIcon />.
export type NavIconComponent = IconType | SvgIconComponent;

export interface NavChildItem {
  label: string;
  path: string;
  icon: NavIconComponent;
}

export interface NavItem {
  label: string;
  // For a group (an item with children) this is ignored - clicking it
  // expands the group instead of navigating.
  path: string;
  icon: NavIconComponent;
  children?: NavChildItem[];
}