import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputSt = styled.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`;
