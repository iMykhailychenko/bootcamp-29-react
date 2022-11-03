import { Suspense } from 'react';

import { Link, Outlet } from 'react-router-dom';

const subPages = [
  { href: '/exercises/timer', title: 'Timer' },
  { href: '/exercises/cancel-request', title: 'Cancel Request' },
  { href: '/exercises/counter', title: 'Counter' },
  { href: '/exercises/re-render', title: 'Re-render' },
  { href: '/exercises/login', title: 'Login' },
  { href: '/exercises/redux-counter', title: 'Redux Counter' },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        {subPages.map(item => (
          <li key={item.href} className="nav-item">
            <Link className="nav-link" to={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <Suspense fallback={<p>Loading inside ExercisesPage ...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
