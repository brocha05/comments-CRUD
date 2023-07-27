/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
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
    updateComment,
    handleEdit,
    edit,
    editComment,
    handleEditEmail,
    handleEditComment,
  } = useComment();

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Box className="container">
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
          {edit && editComment.id === comment.id ? (
            <Stack>
              <TextField
                className="input_data"
                label="Email"
                value={editComment.email}
                onChange={(event) => handleEditEmail(event.target.value)}
              />
              <TextField
                className="input_data"
                label="Add a comment"
                multiline
                rows={3}
                value={editComment.comment}
                onChange={(event) => handleEditComment(event.target.value)}
              />
              <Button onClick={() => handleEdit(comment)}>Cancel</Button>
              <Button onClick={() => updateComment(editComment)}>
                Save
              </Button>
            </Stack>
          ) : (
            <>
              <Typography>{comment.email}</Typography>
              <Typography>{comment.comment}</Typography>
              <Button onClick={() => handleEdit(comment)}>Edit</Button>
              <Button onClick={() => deleteComment(comment.id ?? 0)}>
                Delete
              </Button>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
}
// ivan.fuentes@densitylabs.io
export default App;
