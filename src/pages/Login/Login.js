import { LoginForm } from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Log in
      </h1>
      <LoginForm />
    </div>
  );
}
