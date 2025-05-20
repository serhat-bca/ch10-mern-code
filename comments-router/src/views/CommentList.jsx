import Comment from "../components/Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((c) => (
        <Comment comment={c} key={c.id} />
      ))}
    </div>
  );
};

export default CommentList;
