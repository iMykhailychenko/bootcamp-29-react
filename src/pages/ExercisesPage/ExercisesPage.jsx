const subPages = [
  { href: '/exercises/timer', title: 'Timer' },
  { href: '/exercises/cancel-request', title: 'Cancel Request' },
  { href: '/exercises/counter', title: 'Counter' },
  { href: '/exercises/re-render', title: 'Re-render' },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        {subPages.map(item => (
          <li key={item.href} className="nav-item">
            <a className="nav-link" to={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
