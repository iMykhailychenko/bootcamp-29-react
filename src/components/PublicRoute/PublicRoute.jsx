import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors.auth';

export const PublicRoute = () => {
  const token = useSelector(selectAccessToken);
  const location = useLocation();

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/', { state: { data: 'test' } });
  // };

  return token ? <Navigate to={location.state?.from || '/'} /> : <Outlet />;
};
