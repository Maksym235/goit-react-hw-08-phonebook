import { Conteiner } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/authOperations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
export function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Conteiner>
      <p>Welcome, {user.name} </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </Conteiner>
  );
}
