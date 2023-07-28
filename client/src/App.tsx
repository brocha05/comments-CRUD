/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useComment } from "./hooks/useComment";
import { Box, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Form } from "./components/Form";
import { Comment } from "./components/Comment";
import { EditComment } from "./components/EditComment";

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
        <Form
          comment={comment}
          error={error}
          handleEmailChange={handleEmailChange}
          handleCommentChange={handleCommentChange}
          createComment={createComment}
        />
        {commentList.map((comment) => (
          <Box key={comment.id} className="comment_container">
            {edit && editComment.id === comment.id ? (
              <EditComment
                email={editComment.email}
                commentary={editComment.comment}
                comment={comment}
                editComment={editComment}
                handleEditEmail={handleEditEmail}
                handleEditComment={handleEditComment}
                handleEdit={handleEdit}
                updateComment={updateComment}
              />
            ) : (
              <Comment
                email={comment.email}
                commentary={comment.comment}
                comment={comment}
                handleEdit={handleEdit}
                deleteComment={deleteComment}
              />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
}

export default App;
