import { Button } from 'components/Button';
import { UserCard } from 'components/UserCard/UserCard';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutAction } from 'redux/auth/slice.auth';

const activeClassName = ({ isActive }) => (isActive ? 'btn btn-primary mb-2' : 'btn btn-light mb-2');

export const UserNav = () => {
  const dispatch = useDispatch();

  const handleLogUot = () => {
    dispatch(logOutAction());
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <UserCard />

        <NavLink to="/" end style={{ textAlign: 'left', marginLeft: '-10px' }} className={activeClassName}>
          Home page
        </NavLink>

        <NavLink to="/posts" style={{ textAlign: 'left', marginLeft: '-10px' }} className={activeClassName}>
          Posts list
        </NavLink>

        <NavLink to="/rtk-posts" style={{ textAlign: 'left', marginLeft: '-10px' }} className={activeClassName}>
          RTK Posts list
        </NavLink>

        <NavLink to="/new-post" style={{ textAlign: 'left', marginLeft: '-10px' }} className={activeClassName}>
          Create new post
        </NavLink>

        <NavLink to="/exercises" style={{ textAlign: 'left', marginLeft: '-10px' }} className={activeClassName}>
          React exercises
        </NavLink>
      </div>

      <Button onClick={handleLogUot} className="btn-danger mt-auto">
        Log Out
      </Button>
    </div>
  );
};
