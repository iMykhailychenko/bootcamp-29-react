import { lazy, Suspense } from 'react';

// import ExercisesPage from 'pages/ExercisesPage';
// import CancelRequest from 'pages/ExercisesPage/CancelRequest';
// import CounterPage from 'pages/ExercisesPage/CounterPage';
// import { LoginPage } from 'pages/ExercisesPage/LoginPage';
// import LoginPage from 'pages/ExercisesPage/LoginPage';
// import RerenderPage from 'pages/ExercisesPage/RerenderPage';
// import TimerPage from 'pages/ExercisesPage/TimerPage';
// import HomePage from 'pages/HomePage';
// import NewPostPage from 'pages/NewPostPage';
// import NotFoundPage from 'pages/NotFoundPage';
// import PostsPage from 'pages/PostsListPage';
// import SinglePostPage from 'pages/SinglePostPage';
// import CommentsPage from 'pages/SinglePostPage/CommentsPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';

const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));
const UsersPage = lazy(() => import('./pages/ExercisesPage/UsersPage'));
const CancelRequest = lazy(() => import('./pages/ExercisesPage/CancelRequest'));
const CounterPage = lazy(() => import('./pages/ExercisesPage/CounterPage'));
const LoginPage = lazy(() => import('./pages/ExercisesPage/LoginPage'));
const RerenderPage = lazy(() => import('./pages/ExercisesPage/RerenderPage'));
const TimerPage = lazy(() => import('./pages/ExercisesPage/TimerPage'));
const CounterReduxPage = lazy(() => import('./pages/ExercisesPage/CounterReduxPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const NewPostPage = lazy(() => import('./pages/NewPostPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PostsPage = lazy(() => import('./pages/PostsPage'));
const RTKPostsPage = lazy(() => import('./pages/RTKPostsPage'));
const SinglePostPage = lazy(() => import('./pages/SinglePostPage'));
const CommentsPage = lazy(() => import('./pages/SinglePostPage/CommentsPage'));

export const App = () => {
  return (
    <BrowserRouter basename="bootcamp-29-react">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/posts" element={<PostsPage />} />
            <Route path="/rtk-posts" element={<RTKPostsPage />} />

            <Route path="/posts/:postId" element={<SinglePostPage />}>
              <Route path="comments" element={<CommentsPage />} />
            </Route>

            <Route path="/post-new" element={<NewPostPage />} />

            <Route path="/new-post" element={<Navigate to="/post-new" />} />

            <Route path="/exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="/exercises/timer" />} />

              <Route path="timer" element={<TimerPage />} />
              <Route path="redux-counter" element={<CounterReduxPage />} />
              <Route path="cancel-request" element={<CancelRequest />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="re-render" element={<RerenderPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
