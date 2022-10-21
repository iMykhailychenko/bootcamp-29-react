import { Header, Layout } from 'components/Layout';
import { UsersList } from 'components/Users';

export const skillsList2 = [
  { value: 'react', title: 'React' },
  { value: 'vue', title: 'Vue' },
];

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <UsersList />
    </Layout>
  );
};
