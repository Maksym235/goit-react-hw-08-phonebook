import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/Contacts/selectors';

export const useContacts = () => useSelector(selectFilteredContacts);
