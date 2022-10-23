import { Header, Layout } from 'components/Layout';
import { Timer } from 'components/Timer/Timer';
import { UsersList } from 'components/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <Timer />

      <UsersList />
    </Layout>
  );
};
