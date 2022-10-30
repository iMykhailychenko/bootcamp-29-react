// import HomePage from 'pages/HomePage';
// import NewPostPage from 'pages/NewPostPage';
// import { SinglePostPage } from 'pages/SinglePostPage';

import { Layout } from './components/Layout';
import Posts from './pages/PostsListPage';

export const App = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      <Posts />
      {/* <NewPostPage /> */}
      {/* <SinglePostPage /> */}
    </Layout>
  );
};
