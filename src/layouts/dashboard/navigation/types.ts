import type { IconType } from "react-icons";

export interface NavChildItem {
  label: string;
  path: string;
  icon: IconType;
}

export interface NavItem {
  label: string;
  // For a group (an item with children) this is ignored - clicking it
  // expands the group instead of navigating.
  path: string;
  icon: IconType;
  children?: NavChildItem[];
}