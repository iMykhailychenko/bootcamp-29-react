import { Component } from 'react';

import { Counter } from 'components/Counter';
import { Header, Layout } from 'components/Layout';
import { TimerModal } from 'components/Timer/TimerModal';
// import { Posts } from 'components/Posts';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Header title="Hello world!" />
        <TimerModal />
        <Counter />
        {/* <Posts /> */}
      </Layout>
    );
  }
}
