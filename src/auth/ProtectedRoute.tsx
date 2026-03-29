import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return null;
    }

    // If the user is NOT authenticated, redirect them away
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    // If the user IS authenticated, allow access to protected routes
    return <Outlet />;
}

export default ProtectedRoute