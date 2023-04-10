import { Form } from '../../components/FormToAddContact/FormToAddContact';
import { Input } from '../../components/FindInput/FindInput';
import { ContactList } from '../../components/ContactsList/ContactsList';

export default function Contacts() {
  return (
    <div>
      <Form />
      <Input />
      <ContactList />
    </div>
  );
}
