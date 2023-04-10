import { Form, Input, Btn } from './RegisterForm.styled';

export function RegisterForm() {
  return (
    <Form>
      <Input placeholder="login" />
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Btn>Sign Up</Btn>
    </Form>
  );
}
