import { CommentCard } from '@/entities/comment';

export const CommentList = () => {
  return (
    <>
      {Array.from({ length: 4 }).map(() => (
        <CommentCard />
      ))}
    </>
  );
};
