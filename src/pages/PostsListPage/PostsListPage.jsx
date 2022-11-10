import { useMemo, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/posts.service';

export const PostsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  const [posts, setPosts] = useState(null);
  const [status, setStatus] = useState(Status.Idle);

  useEffect(() => {
    setStatus(Status.Loading);
    getPostsService({ search, page })
      .then(data => {
        setStatus(Status.Success);
        setPosts(data);
      })
      .catch(() => setStatus(Status.Error));
  }, [search, page]);

  const handleUpdateSearch = value => {
    setSearchParams({ search: value, page: 1 });
  };

  const handleChangePage = newPage => {
    setSearchParams({ ...params, page: newPage });
  };

  return (
    <>
      <PostsSearch defaultValue={search} onSubmit={handleUpdateSearch} />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {(status === Status.Loading || status === Status.Idle) && <PostsLoader />}

          {status === Status.Error && <PostsError />}

          {status === Status.Success && !posts && <PostsNotFound />}

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
