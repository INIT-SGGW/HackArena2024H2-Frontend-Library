// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the shape of the authentication context
interface AuthContextType {
    isAuthenticated: boolean | null;
    email: string;
    teamName: string;
    login: (email: string, teamName: string) => void;
    logout: () => void;
    reset: () => void;
}

// Create the Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [email, setEmail] = useState<string>("");
    const [teamName, setTeamName] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const loginTime: string | null = localStorage.getItem('loginTime') || null;
        const email: string | null = localStorage.getItem('email') || null;
        const teamName: string | null = localStorage.getItem('teamName') || null;
        // setIsAuthenticated(true);
        // setTeamName("Admin");
        if (!loginTime || !email || !teamName) {
            setIsAuthenticated(false);
        } else {
            const loginTimeDate = new Date(loginTime);
            const currentTime = new Date();
            const diff = currentTime.getTime() - loginTimeDate.getTime();
            const oneDay = 24 * 60 * 60 * 1000;
            if (diff < oneDay) {
                setIsAuthenticated(true);
                setEmail(JSON.parse(email));
                setTeamName(JSON.parse(teamName));
            }
            if (diff >= oneDay) {
                setIsAuthenticated(false);
                localStorage.removeItem('loginTime');
                localStorage.removeItem('email');
                localStorage.removeItem('teamName');
            }
        }
    }, []);

    const login = (email: string, teamName: string) => {
        setIsAuthenticated(true);
        localStorage.setItem('loginTime', new Date().toISOString());
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("teamName", JSON.stringify(teamName));
        setEmail(email);
        setTeamName(teamName);
        navigate('/account', { replace: true });
    };
    const logout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem("loginTime");
        localStorage.removeItem("email");
        localStorage.removeItem("teamName");
        navigate('/login', { replace: true });
    };
    const reset = () => {
        setIsAuthenticated(false)
        localStorage.removeItem("loginTime");
        localStorage.removeItem("email");
        localStorage.removeItem("teamName");
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, email, teamName, login, logout, reset }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook for easy access to AuthContext
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
