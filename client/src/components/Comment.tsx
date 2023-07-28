import { Button, Typography } from "@mui/material";
import { CommentProps } from "../types/commentProps";

export const Comment = ({
  email,
  commentary,
  comment,
  handleEdit,
  deleteComment,
}: CommentProps) => {
  return (
    <>
      <Typography variant="h6">{email}</Typography>
      <Typography>{commentary}</Typography>
      <Button onClick={() => handleEdit(comment)}>Edit</Button>
      <Button onClick={() => deleteComment(comment.id ?? 0)}>Delete</Button>
    </>
  );
};
