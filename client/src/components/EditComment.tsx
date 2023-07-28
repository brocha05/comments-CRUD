import { Box, Button, TextField } from "@mui/material";
import { EditCommentProps } from "../types/editCommentProps";

export const EditComment = ({
  email,
  commentary,
  comment,
  editComment,
  handleEditEmail,
  handleEditComment,
  handleEdit,
  updateComment,
}: EditCommentProps) => {
  return (
    <>
      <Box className="edit">
        <TextField
          className="input_data"
          label="Email"
          value={email}
          size="small"
          onChange={(event) => handleEditEmail(event.target.value)}
        />
        <TextField
          className="input_data"
          label="Comment"
          value={commentary}
          multiline
          rows={3}
          onChange={(event) => handleEditComment(event.target.value)}
        />
      </Box>
      <Button onClick={() => handleEdit(comment)}>Cancel</Button>
      <Button onClick={() => updateComment(editComment)}>Save</Button>
    </>
  );
};
