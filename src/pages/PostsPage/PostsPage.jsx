import { useMemo, useEffect } from 'react';

import { omitBy } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getPostsOperation } from 'redux/posts/operation.posts';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';

export const PostsListPage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  const posts = useSelector(state => state.posts.data);
  const status = useSelector(state => state.posts.status);

  useEffect(() => {
    // const obj = { search: '', page: 10, limit: 0 }
    // omitBy(obj, item => !item) -> { page: 10 }
    // ?search=&page=10&limit=0 -> ?page=10
    const newParams = omitBy({ search, page }, item => !item);

    dispatch(getPostsOperation(newParams));
  }, [dispatch, search, page]);

  const handleUpdateSearch = value => {
    setSearchParams(omitBy({ search: value, page: 1 }, item => !item));
  };

  const handleChangePage = newPage => {
    setSearchParams(omitBy({ ...params, page: newPage }, item => !item));
  };

  return (
    <>
      <PostsSearch defaultValue={search} onSubmit={handleUpdateSearch} />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {(status === Status.Loading || status === Status.Idle) && <PostsLoader />}

          {status === Status.Error && <PostsError />}

          {status === Status.Success && !posts?.data?.length && <PostsNotFound />}

          {posts?.data && posts.data.map(post => <PostsItem key={post.id} post={post} />)}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(posts?.total_pages)].map((_, index) => (
            <Button key={index} disabled={index + 1 === posts?.page} onClick={() => handleChangePage(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
