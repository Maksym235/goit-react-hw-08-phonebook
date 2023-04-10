import { Conteiner } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';
export function AuthNav() {
  return (
    <Conteiner>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
    </Conteiner>
  );
}
