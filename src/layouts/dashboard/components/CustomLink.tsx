import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Palette } from "../../../config/colors";

interface ActiveLinkProps {
  isactive: boolean;
}

// Without this, MUI's styled() forwards `isactive` straight through to the
// underlying <a> tag as an invalid DOM attribute and React warns about it.
const shouldForwardProp = (prop: string) => prop !== "isactive";

const ActiveLink = styled(Link, { shouldForwardProp })<ActiveLinkProps>(
  ({ isactive }) => ({
    fontFamily: "Jost",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: 500,
    gap: 7,
    textDecoration: "none",
    borderRadius: "6px",
    padding: "7px 10px",
    margin: "5px 0px",
    transition:
      "color 0.5s ease-in-out, background-color 0.5s ease-in-out, font-size 0.5s ease-in-out, padding 0.5s ease-in-out",
    "&:hover": {
      color: "#000000",
      fontSize: "14px",
      backgroundColor: Palette.primary.light,
      padding: "5px 7px",
    },
    ...(isactive && {
      // was color + backgroundColor both = Palette.primary.default,
      // which made the active label invisible against its own background
      color: "#ffffff",
      fontSize: "14px",
      backgroundColor: Palette.primary.default,
      padding: "5px 7px",
    }),
  }),
);

const InActiveLink = styled(Link, { shouldForwardProp })<ActiveLinkProps>(
  ({ isactive }) => ({
    fontFamily: "comfortaa",
    color: "#050505",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    textDecoration: "none",
    borderRadius: "7px",
    padding: "7px 10px",
    margin: "5px 0px",
    fontWeight: 700,
    transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out",
    "&:hover": {
      color: "#2e2e2eff",
      fontSize: "12px",
      backgroundColor: Palette.primary.light,
    },
    ...(isactive && {
      color: "#ffffff",
      fontSize: "12px",
      backgroundColor: Palette.primary.default,
      padding: "7px 7px",
    }),
  }),
);

export { ActiveLink, InActiveLink };
