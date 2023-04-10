import { Form, Input, Btn } from './LoginForm.styled';

export function LoginForm() {
  return (
    <Form>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Btn>Log In</Btn>
    </Form>
  );
}
