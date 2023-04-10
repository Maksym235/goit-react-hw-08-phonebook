import { AiFillCloseCircle } from 'react-icons/ai';
import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

// ----------REDUX---------------
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';

export function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item key={id}>
      {name}: {number}
      <Button type="button" onClick={handleDelete}>
        <AiFillCloseCircle />
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
