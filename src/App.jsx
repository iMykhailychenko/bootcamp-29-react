import ExercisesPage from 'pages/ExercisesPage';
import CancelRequest from 'pages/ExercisesPage/CancelRequest';
import CounterPage from 'pages/ExercisesPage/CounterPage';
import RerenderPage from 'pages/ExercisesPage/RerenderPage';
import TimerPage from 'pages/ExercisesPage/TimerPage';
import HomePage from 'pages/HomePage';
import NewPostPage from 'pages/NewPostPage';
import NotFoundPage from 'pages/NotFoundPage';
import PostsPage from 'pages/PostsListPage';
import SinglePostPage from 'pages/SinglePostPage';
import CommentsPage from 'pages/SinglePostPage/CommentsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';

export const App = () => {
  return (
    <BrowserRouter basename="bootcamp-29-react">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/posts" element={<PostsPage />} />

          <Route path="/posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/new-post" element={<NewPostPage />} />

          <Route path="/exercises" element={<ExercisesPage />}>
            <Route path="timer" element={<TimerPage />} />
            <Route path="cancel-request" element={<CancelRequest />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="re-render" element={<RerenderPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
