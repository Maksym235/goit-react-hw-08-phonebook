import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Conteiner = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
