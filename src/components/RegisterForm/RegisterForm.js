import { Form, Input, Btn } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/Auth/authOperations';
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
      <Input type="text" name="name" placeholder="login" />
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <Btn>Sign Up</Btn>
    </Form>
  );
}
