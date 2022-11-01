import { useState } from 'react';

import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};
