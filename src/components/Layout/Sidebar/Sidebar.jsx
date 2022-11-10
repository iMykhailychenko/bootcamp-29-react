import { useSelector } from 'react-redux';

import { NotAuth } from './NotAuth';
import { UserNav } from './UserNav';

export const Sidebar = () => {
  const token = useSelector(state => state.auth.access_token);

  return (
    <aside className="nav nav-pills p-5 bg-light col-2" style={{ height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: '88vh' }}>
        {token ? <UserNav /> : <NotAuth />}
      </div>
    </aside>
  );
};
