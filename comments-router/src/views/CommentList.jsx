import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((c) => (
        <Comment comment={c} key={c.id} />
      ))}
      <CommentForm />
    </div>
  );
};

export default CommentList;
