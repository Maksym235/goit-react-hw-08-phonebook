import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 26px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-weight: 400;
  font-size: 18px;
`;

export const Input = styled.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`;

export const Button = styled.button`
  widht: 150px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #7b8189;
  color: #ffffff;

  transition: background-color 0.5s ease-out, color 0.5s ease-out;

  &:hover {
    background-color: #bfa8ee;
    color: #000000;
  }
`;
