import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Sign Up
      </h1>
      <RegisterForm />
    </div>
  );
}
