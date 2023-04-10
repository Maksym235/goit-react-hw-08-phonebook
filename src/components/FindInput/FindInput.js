import React from 'react';
import { Label, InputSt } from './FindInput.styled';

//---------------REDUX-------------
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/Contacts/filterSlice';

export function Input() {
  const dispatch = useDispatch();
  const HandleChange = evt => dispatch(filterContacts(evt.target.value));

  return (
    <Label>
      Find contact by name
      <InputSt type="text" name="find" onChange={HandleChange} />
    </Label>
  );
}
