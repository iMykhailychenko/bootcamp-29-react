import { Button } from 'components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from 'components/Posts';
import { omitBy } from 'lodash';
import { useSearchParams } from 'react-router-dom';
import { useGetPostQuery } from 'redux/rtk-posts/api.rtk-posts';

export const RTKPostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  const { data, isError, isLoading } = useGetPostQuery(omitBy({ search, page }, item => !item));

  const handleUpdateSearch = value => {
    setSearchParams(omitBy({ search: value, page: 1 }, item => !item));
  };

  const handleChangePage = newPage => {
    setSearchParams(omitBy({ search, page: newPage }, item => !item));
  };

  return (
    <>
      <PostsSearch defaultValue={search} onSubmit={handleUpdateSearch} />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {isLoading && <PostsLoader />}

          {isError && <PostsError />}

          {!isError && !data?.data?.length && <PostsNotFound />}

          {data?.data && data.data.map(post => <PostsItem key={post.id} post={post} />)}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(data?.total_pages)].map((_, index) => (
            <Button key={index} disabled={index + 1 === data?.page} onClick={() => handleChangePage(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
