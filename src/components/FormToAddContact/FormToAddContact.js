import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormStyled,
  Input,
  Label,
  Button,
  Title,
} from './FormToAddContact.styled';
import { BsFillTelephonePlusFill } from 'react-icons/bs';

// -------REDUX-----------------
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import { selectContacts } from 'redux/Contacts/selectors';
export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // --------------------------------------------
  const dispatch = useDispatch();

  const onHandlerChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };
  const contacts = useSelector(selectContacts);

  const onFormSubmmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={onFormSubmmit}>
      <Title>
        Add contact <BsFillTelephonePlusFill />
      </Title>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="enter name"
          onChange={onHandlerChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="enter number"
          onChange={onHandlerChange}
        />
      </Label>
      <Button>Add contact</Button>
    </FormStyled>
  );
}
