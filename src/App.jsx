// import { Banner } from './components/Banner';
// import { Counter } from './components/Counter';
import { Header, Layout } from 'components/Layout';
// import { Skills } from 'components/Skills/Skills';
// import { skillsList } from 'config';
// import { LoginForm } from './components/LoginForm/LoginForm';
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
      {/* <Skills name="skills1" list={skillsList} />
      <br />
      <Skills name="skills2" list={skillsList2} value="react" /> */}
      {/* <LoginForm /> */}
      {/* <Counter /> */}
      {/* <Banner /> */}
      {/* <UsersList /> */}
    </Layout>
  );
};
