const CommentForm = () => {
  const handleCommentPost = (e) => {
    e.preventDefault();
    console.log("comment: " + e.target.comment.value);
    e.target.comment.value = "";
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleCommentPost}>
        Comment: <input type="text" name="comment" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
