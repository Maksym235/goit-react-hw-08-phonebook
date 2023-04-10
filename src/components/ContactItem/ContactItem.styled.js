import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  color: #ffffff;
  background-color: #bfa8ee;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #9886be;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;
  transition: scale 0.1s ease-out;

  &:hover {
    scale: 1.2;
  }
`;
