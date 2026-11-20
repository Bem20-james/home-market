import type { ComponentType, CSSProperties } from "react";
import type { NavIconComponent } from "../navigation/types";

interface NavIconProps {
  icon: NavIconComponent;
  size?: number;
}

// Both react-icons and @mui/icons-material draw their <svg> at
// width/height = 1em, so sizing through font-size works identically for
// either library. That means there is no need to detect which one an icon
// came from (detecting MUI icons at runtime is unreliable: they are wrapped
// in React.memo, so the `muiName` their type advertises isn't on the export).
type StyledIcon = ComponentType<{ style?: CSSProperties }>;

const NavIcon = ({ icon, size = 20 }: NavIconProps) => {
  const Icon = icon as StyledIcon;
  return <Icon style={{ fontSize: size }} />;
};

export default NavIcon;
