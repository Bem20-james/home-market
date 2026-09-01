/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import { useAppSelector } from "../store/hooks";
import { type User } from "../types/authTypes";

interface UserContextValue {
  user: User | null;
  config: {
    headers: {
      "Content-Type": string;
      Authorization: string;
    };
  };
  token: string | null;
}

// createContext() with no argument is invalid TS and is the source of the
// "user does not exist on type unknown" errors downstream. Give it a real
// generic + default value instead.
export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // accessToken lives at the top level of auth state, not on the User
  // object - `user?.token` was always undefined.
  const { user, accessToken } = useAppSelector((state) => state.auth);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
  };

  return (
    <UserContext.Provider value={{ user, config, token: accessToken }}>
      {children}
    </UserContext.Provider>
  );
}
