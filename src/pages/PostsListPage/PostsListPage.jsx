import { useEffect, useState } from 'react';

import { Button } from 'components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from 'components/Posts';
import { getPostsService } from 'services/posts.service';

import { Status } from 'constants/fetch-status';

export const PostsListPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
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

  return (
    <>
      <PostsSearch defaultValue={search} onSubmit={setSearch} />

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
            <Button key={index} disabled={index + 1 === posts?.page} onClick={() => setPage(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
