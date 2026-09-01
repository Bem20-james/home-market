import type { IconType } from "react-icons";

export interface NavChildItem {
  label: string;
  path: string;
  icon: IconType;
}

export interface NavItem {
  label: string;
  path: string;
  icon: IconType;
  children: NavChildItem[];
}