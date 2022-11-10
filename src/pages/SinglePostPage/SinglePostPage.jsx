import { useEffect, useState, Suspense } from 'react';

import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loader } from '../../components/Loader';
import { getSinglePostService } from '../../services/posts.service';

export const SinglePostPage = () => {
  const { postId } = useParams();
  const location = useLocation();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSinglePostService(postId)
      .then(setPost)
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  // null, undefined ?? 1
  // false, undefined, null, 0, NaN || 1
  return (
    post && (
      <>
        <Link to={location.state?.from || '/posts'} className="btn btn-primary mb-4">
          Go back
        </Link>
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
        />

        <h1 className="mb-5">{post.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />

        <Link to={`/posts/${postId}/comments`} className="btn btn-primary my-4">
          Vew post comments
        </Link>

        <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};
