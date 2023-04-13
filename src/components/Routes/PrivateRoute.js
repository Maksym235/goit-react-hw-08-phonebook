import { useAuth } from 'components/hooks/useAuth';

import { Navigate } from 'react-router-dom';
export function PrivateRoute({ component: Component, redirectTo }) {
  const { isRefreshing, isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
