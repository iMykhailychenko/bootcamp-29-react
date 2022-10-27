import { Component } from 'react';

// import { Counter } from 'components/Counter';
import { Header, Layout } from 'components/Layout';
import { TimerModal } from 'components/Timer/TimerModal';
import { UsersList } from 'components/Users/UsersList';
// import { Posts } from 'components/Posts';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Header title="Hello world!" />
        <TimerModal />
        <UsersList />
        {/* <Counter /> */}
        {/* <Posts /> */}
      </Layout>
    );
  }
}
