import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }

    return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
