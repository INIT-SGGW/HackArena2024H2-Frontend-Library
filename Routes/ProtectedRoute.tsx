import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({ children: children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [])

    return (
        <>
            {isAuthenticated && children}
        </>
    );
}