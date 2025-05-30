import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../Context";

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