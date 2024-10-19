// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

// Define the shape of the authentication context
interface AuthContextType {
  isAuthenticated: boolean | null;
  login: () => void;
  logout: () => void;
}

// Create the Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loginTime: string = localStorage.getItem("loginTime") || "";
    if (!loginTime) {
      setIsAuthenticated(false);
    } else {
      const loginTimeDate = new Date(loginTime);
      const currentTime = new Date();
      const diff = currentTime.getTime() - loginTimeDate.getTime();
      const oneDay = 24 * 60 * 60 * 1000;
      if (diff < oneDay) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("loginTime");
      }
    }
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("loginTime", new Date().toISOString());
    navigate("/");
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("loginTime");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for easy access to AuthContext
export const useAdminAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AuthProvider");
  }
  return context;
};
