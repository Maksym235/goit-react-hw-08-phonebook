import { Conteiner } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
export function Navigation() {
  return (
    <Conteiner>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </Conteiner>
  );
}
