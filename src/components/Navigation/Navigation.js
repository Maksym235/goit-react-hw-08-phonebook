import { Conteiner, Link } from './Navigation.styled';
export function Navigation() {
  return (
    <Conteiner>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </Conteiner>
  );
}
