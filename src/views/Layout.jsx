import { Suspense } from 'react';
import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
