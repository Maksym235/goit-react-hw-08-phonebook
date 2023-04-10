import { Contact } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useContacts } from 'components/hooks/useFilterContacts';

export function ContactList() {
  const contacts = useContacts();
  return (
    <List>
      {contacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </List>
  );
}
