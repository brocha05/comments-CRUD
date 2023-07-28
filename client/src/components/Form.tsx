import { Box, Button, TextField } from "@mui/material"
import { FormProps } from "../types/formProps";

export const Form = ({comment, error, handleEmailChange, handleCommentChange, createComment}: FormProps) => {
  return (
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
  )
}
