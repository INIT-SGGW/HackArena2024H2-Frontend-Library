import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { useAdminAuth } from "../Context";

export default function AdminProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAdminAuth();
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