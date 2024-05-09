import { createContext, useContext, useState } from "react";

type AuthContextProps = {
  email: string | null;
  login: (_email: string) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const login = (email: any) => {
    setEmail(email);
  };

  const logout = () => {
    setEmail(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ email, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
