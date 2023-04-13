import { Conteiner } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/authOperations';
import { useAuth } from 'components/hooks/useAuth';
export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Conteiner>
      <p>Welcome, {user.name} </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </Conteiner>
  );
}
