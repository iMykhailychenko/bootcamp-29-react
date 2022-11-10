import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const activeClassName = ({ isActive }) => (isActive ? 'btn nav-btn btn-primary' : 'btn nav-btn btn-light');

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <NavLink to="/" end className={activeClassName}>
          Home page
        </NavLink>

        <NavLink to="/posts" className={activeClassName}>
          Posts list
        </NavLink>

        <NavLink to="/post-new" className={activeClassName}>
          Create new post
        </NavLink>

        <NavLink to="/exercises" className={activeClassName}>
          React exercises
        </NavLink>
      </div>
    </div>
  );
};
