//-----------REACT--------------
import { useEffect } from 'react';

//-----------REDUX---------------
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';

//-----------COMPONENTS-------------
import { Form } from '../../components/FormToAddContact/FormToAddContact';
import { Input } from '../../components/FindInput/FindInput';
import { ContactList } from '../../components/ContactsList/ContactsList';

export default function Contacts() {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchContacts());
  }, [dispach]);
  return (
    <div>
      <Form />
      <Input />
      <ContactList />
    </div>
  );
}
