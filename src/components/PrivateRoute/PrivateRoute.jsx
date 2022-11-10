import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors.auth';

export const PrivateRoute = () => {
  const token = useSelector(selectAccessToken);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
