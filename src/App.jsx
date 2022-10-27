import { Component } from 'react';

// import { Counter } from 'components/Counter';
// import { Rerender } from 'components/Rerender';
import { Header, Layout } from 'components/Layout';
import { Posts } from 'components/Posts';
import { TimerModal } from 'components/Timer/TimerModal';
import { AuthProvider } from 'context/auth.contex';
// import { UsersList } from 'components/Users/UsersList';

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Layout>
          <Header title="Hello world!" />
          <TimerModal />
          {/* <Rerender /> */}
          {/* <UsersList /> */}
          {/* <Counter /> */}
          <Posts />
        </Layout>
      </AuthProvider>
    );
  }
}
