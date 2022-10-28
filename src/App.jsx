import { useEffect, useRef } from 'react';

// import { Counter } from 'components/Counter';
// import { Rerender } from 'components/Rerender';
import { Header, Layout } from 'components/Layout';
import { Posts } from 'components/Posts';
import { TimerModal } from 'components/Timer/TimerModal';
import { AuthProvider } from 'context/auth.contex';
import { ThemeProvider } from 'context/theme.context';
import { Request } from 'components/Request/Request';
import { MyPortal } from 'components/MyPortal/MyPortal';

// import { UsersList } from 'components/Users/UsersList';

export const App = () => {
  const divFef = useRef();
  const counterRef = useRef(0);

  useEffect(() => {
    console.log(divFef.current);
    divFef.current.style.color = 'red';
    // divFef.current.innerHTML = '<p>lsdvfvdfvddf</p>';
  }, []);

  const increment = () => {
    counterRef.current += 1;
    console.log(counterRef.current);
  };

  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <p ref={divFef}>lsdvfvdfvddfre aut natus?</p>

          <button onClick={increment} type="button">
            {counterRef.current}
          </button>

          <Header title="Hello world!" />
          <TimerModal />
          <MyPortal />

          <Request />
          {/* <Rerender /> */}
          {/* <UsersList /> */}
          {/* <Counter /> */}
          <Posts />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
};
