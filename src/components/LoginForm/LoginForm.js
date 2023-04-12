import { Form, Input, Btn } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperations';
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
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <Btn>Log In</Btn>
    </Form>
  );
}
