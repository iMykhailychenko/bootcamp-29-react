import { Component } from 'react';

import { Header, Layout } from 'components/Layout';
import { Rerender } from 'components/Rerender';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Header title="Hello world!" />

        <Rerender />

        {/* <Timer /> */}
        {/* <Counter /> */}

        {/* <TimerModal /> */}

        {/* <UsersList /> */}
      </Layout>
    );
  }
}
