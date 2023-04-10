import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Conteiner } from './Layout.styled';

export function Layout() {
  return (
    <Conteiner>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
}
