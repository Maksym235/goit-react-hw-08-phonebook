import { Conteiner } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/authOperations';
import { useAuth } from 'components/hooks/useAuth';
import Button from '@mui/material/Button';
export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Conteiner>
      <p>{user.email} </p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Conteiner>
  );
}
