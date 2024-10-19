import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            {isAuthenticated && children}
        </>
    );
}