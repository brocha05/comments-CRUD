/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useComment } from "./hooks/useComment";

function App() {
  const {
    createComment,
    comment,
    handleEmailChange,
    handleCommentChange,
    commentList,
    getComments,
    deleteComment,
    // updateComment,
    handleEdit,
  } = useComment();

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="container">
      <Typography variant="h2" className="title">
        Leave comments
      </Typography>
      <Box className="form_container">
        <TextField
          className="input_data"
          label="Email"
          value={comment.email}
          onChange={(event) => handleEmailChange(event.target.value)}
        />
        <TextField
          className="input_data"
          label="Add a comment"
          multiline
          rows={3}
          value={comment.comment}
          onChange={(event) => handleCommentChange(event.target.value)}
        />
        <Button variant="contained" onClick={createComment}>
          Comment
        </Button>
      </Box>

      {commentList.map((comment) => (
        <Box key={comment.id} className="comment_container">
          <Typography>{comment.email}</Typography>
          <Typography>{comment.comment}</Typography>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={() => deleteComment(comment.id ?? 0)}>Delete</Button>
        </Box>
      ))}
    </div>
  );
}
// ivan.fuentes@densitylabs.io
export default App;
