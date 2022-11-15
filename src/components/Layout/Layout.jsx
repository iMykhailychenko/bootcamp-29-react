import { ToastContainer } from 'react-toastify';

import { ConfettiContainer } from '../Confetti';

import { EasterEgg } from './EasterEgg/EasterEgg';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children }) => {
  return (
    <>
      <div className="d-flex h-100">
        <Sidebar />

        <main className="tab-content p-5 h-100 col-10" style={{ minHeight: '100vh' }}>
          <div className="tab-pane fade show active">{children}</div>
        </main>
      </div>
      hello
      <EasterEgg />
      <ToastContainer />
      <ConfettiContainer />
    </>
  );
};
