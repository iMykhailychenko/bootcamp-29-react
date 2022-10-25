import { Component } from 'react';

import { Header, Layout } from 'components/Layout';
import { Posts } from 'components/Posts';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Header title="Hello world!" />
        <Posts />
      </Layout>
    );
  }
}
