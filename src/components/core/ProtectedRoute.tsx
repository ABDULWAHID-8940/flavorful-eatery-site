import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  adminOnly?: boolean;
}

const ProtectedRoute = ({ adminOnly = false }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /signin page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they login,
    // which is a nicer user experience than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (adminOnly && user?.role !== 'admin') {
    // If the user is not an admin and tries to access an admin-only route,
    // redirect them to their profile or a 'not authorized' page.
    return <Navigate to="/user/profile" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
