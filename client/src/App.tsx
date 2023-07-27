/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useComment } from "./hooks/useComment";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";

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
    error,
  } = useComment();

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Box className="container">
        <Typography variant="h2" className="title">
          Leave comments
        </Typography>
        <Box className="form_container">
          <TextField
            className="input_data"
            label="Email"
            value={comment.email}
            error={error && comment.email.length === 0}
            helperText={
              error && comment.email.length === 0 ? "Email is required" : ""
            }
            onChange={(event) => handleEmailChange(event.target.value)}
          />
          <TextField
            className="input_data"
            label="Add a comment"
            multiline
            rows={3}
            value={comment.comment}
            error={error && comment.comment.length === 0}
            helperText={
              error && comment.comment.length === 0 ? "Comment is required" : ""
            }
            onChange={(event) => handleCommentChange(event.target.value)}
          />
          <Button variant="contained" onClick={createComment}>
            Comment
          </Button>
        </Box>
        {commentList.map((comment) => (
          <Box key={comment.id} className="comment_container">
            {edit && editComment.id === comment.id ? (
              <>
                <TextField
                  className="input_data"
                  label="Email"
                  value={editComment.email}
                  size="small"
                  onChange={(event) => handleEditEmail(event.target.value)}
                />
                <TextField
                  className="input_data"
                  label="Add a comment"
                  value={editComment.comment}
                  multiline
                  rows={3}
                  onChange={(event) => handleEditComment(event.target.value)}
                />
                <Button onClick={() => handleEdit(comment)}>Cancel</Button>
                <Button onClick={() => updateComment(editComment)}>Save</Button>
              </>
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
    </>
  );
}
// ivan.fuentes@densitylabs.io
export default App;
