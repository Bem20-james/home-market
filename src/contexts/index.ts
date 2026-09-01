import { useContext } from "react";
import { UserContext } from "./userContext";

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    // Fails loudly at the call site instead of silently returning
    // `undefined` and producing confusing "cannot read property of
    // undefined" errors three components deeper.
    throw new Error(
      "useUserContext must be used within a UserContextProvider",
    );
  }
  return context;
}