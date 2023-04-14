import { Form } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logIn({
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
      <Button type="submit">Log In</Button>
    </Form>
  );
}
