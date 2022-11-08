import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const subPages = [
  { href: 'timer', title: 'Timer' },
  { href: 'cancel-request', title: 'Cancel Request' },
  { href: 'counter', title: 'Counter' },
  { href: 're-render', title: 'Re-render' },
  { href: 'redux-counter', title: 'Redux Counter' },
  { href: 'users', title: 'Users' },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        {subPages.map(item => (
          <li key={item.href} className="nav-item">
            <NavLink className="nav-link" to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <Suspense fallback={<p>Loading inside ExercisesPage ...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
