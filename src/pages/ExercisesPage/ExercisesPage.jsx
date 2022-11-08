import { Suspense } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { toggleAction } from 'redux/users/slice.users';

const subPages = [
  { href: '/exercises/timer', title: 'Timer' },
  { href: '/exercises/cancel-request', title: 'Cancel Request' },
  { href: '/exercises/counter', title: 'Counter' },
  { href: '/exercises/re-render', title: 'Re-render' },
  { href: '/exercises/login', title: 'Login' },
  { href: '/exercises/redux-counter', title: 'Redux Counter' },
  { href: '/exercises/users', title: 'Users' },
];

export const ExercisesPage = () => {
  const dispatch = useDispatch();
  const toggle = useSelector(state => state.users.toggle);

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

      <button type="button" onClick={() => dispatch(toggleAction())}>
        {toggle ? 'Open' : 'Close'}
      </button>

      <Suspense fallback={<p>Loading inside ExercisesPage ...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
