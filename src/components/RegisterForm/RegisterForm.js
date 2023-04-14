import { Form } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/Auth/authOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      signUp({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="login"
        variant="standard"
        type="text"
        name="name"
      />
      <TextField
        id="standard-basic"
        label="email"
        variant="standard"
        type="email"
        name="email"
      />
      <TextField
        id="standard-basic"
        label="password"
        variant="standard"
        type="password"
        name="password"
      />
      <Button type="submit">Sign Up</Button>
    </Form>
  );
}
