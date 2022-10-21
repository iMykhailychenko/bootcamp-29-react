import { Input } from 'components/Input/Input';
import { Header, Layout } from 'components/Layout';
// import { MyIcon } from 'MyIcon';
import { UsersList } from 'components/Users';
// import { BsFillAlarmFill } from 'react-icons/bs';
// import styled from 'styled-components';

// import { ReactComponent as MySvgIcon } from './assets/user.svg';

// const MyIconStyles = styled(BsFillAlarmFill)`
//   color: red;
//   height: 40px;
//   width: 40px;
// `;

export const skillsList2 = [
  { value: 'react', title: 'React' },
  { value: 'vue', title: 'Vue' },
];

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <UsersList />
      <Input />
    </Layout>
  );
};
