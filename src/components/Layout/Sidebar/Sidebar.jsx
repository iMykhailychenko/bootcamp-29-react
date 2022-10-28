import { useAuth } from 'context/auth.contex';

export const Sidebar = () => {
  const { isAuth, setIsAuth } = useAuth();

  const login = () => {
    setIsAuth(true);
  };

  return (
    <aside className="nav nav-pills p-5 bg-light w-100" style={{ maxWidth: '300px', height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: 'max-content' }}>
        {isAuth ? (
          <>
            <a href="/" style={{ textAlign: 'left' }} className="btn btn-light">
              Home
            </a>
            <a href="/" style={{ textAlign: 'left' }} className="btn btn-link">
              Profile
            </a>
            <a href="/" style={{ textAlign: 'left' }} className="btn btn-link">
              Messages
            </a>
            <a href="/" style={{ textAlign: 'left' }} className="btn btn-link">
              Settings
            </a>
          </>
        ) : (
          <div>
            <p>Please login</p>
            <button onClick={login} type="button" className="btn btn-primary mt-3">
              Login
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
