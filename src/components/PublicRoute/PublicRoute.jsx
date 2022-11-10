import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors.auth';

export const PublicRoute = () => {
  const token = useSelector(selectAccessToken);

  return token ? <Navigate to="/" /> : <Outlet />;
};
