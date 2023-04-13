import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefresh,
} from 'redux/Auth/selectors';

export function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefresh);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
}
