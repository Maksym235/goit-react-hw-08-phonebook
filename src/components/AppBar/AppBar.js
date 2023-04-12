import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.styled';

//--------------REDUX-------------
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';

export function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
