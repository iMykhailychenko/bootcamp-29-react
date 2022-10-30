import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { Loader } from '../../components/Loader';
import { getSinglePostService } from '../../services/posts.service';

export const SinglePostPage = () => {
  // TODO change to dynamic value
  const postId = 10;

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

  return (
    post && (
      <>
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
        />
        <h1 className="mb-5">{post.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />

        <a href={`/posts/${postId}/comments`} className="btn btn-primary my-4">
          Vew post comments
        </a>
      </>
    )
  );
};
