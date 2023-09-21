import { createContext } from "react";

export const AuthContext = createContext<{
  authStatus: boolean;
  setAuthStatus: (status: boolean) => void;
  userId: string | null;
  setUser: (userId: string | null) => void;
}>({
  authStatus: false,
  setAuthStatus: () => {},
  userId: null,
  setUser: () => {},
});

export const AuthProvider = AuthContext.Provider;

export default AuthContext;
