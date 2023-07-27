import axios from "axios";
import { useState } from "react";
import { Comment } from "../types/comment";
import { toast } from "react-hot-toast";

export const useComment = () => {
  const [comment, setComment] = useState<Comment>({ email: "", comment: "" });
  const [editComment, setEditComment] = useState<Comment>({
    email: "",
    comment: "",
  });
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);

  const createComment = async () => {
    if (comment.email === "" || comment.comment === "") {
      toast.error("Make sure to fill in the fields");
      setError(true);
    } else {
      try {
        const result = await axios.post(
          "http://localhost:3000/comment",
          comment
        );
        setCommentList([...commentList, result.data]);
        setComment({ email: "", comment: "" });
        setError(false);
        toast.success("Comment has been created");
      } catch (error) {
        toast.error("Something went wrong");
        console.error(error);
      }
    }
  };

  const getComments = async () => {
    try {
      const result = await axios.get("http://localhost:3000/comments");
      setCommentList(result.data);
    } catch (error) {
      toast.error('Something went wrong')
      console.error(error);
    }
  };

  const deleteComment = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/comment/${id}`);
      setCommentList(commentList.filter((comment) => comment.id !== id));
      toast.success("Comment has been deleted");
    } catch (error) {
      toast.error('Something went wrong')
      console.error(error);
    }
  };

  const updateComment = async (comment: Comment) => {
    try {
      await axios.put(`http://localhost:3000/comment/${comment.id}`, comment);
      setCommentList(
        commentList.map((comentario) => {
          if (comentario.id === comment.id) {
            return {
              ...comentario,
              ...comment,
            };
          }
          return comentario;
        })
      );
      setEdit(false);
    } catch (error) {
      toast.error('Something went wrong')
      console.error(error);
    }
  };

  const handleEmailChange = (newValue: string) => {
    setComment({ ...comment, email: newValue });
  };

  const handleCommentChange = (newValue: string) => {
    setComment({ ...comment, comment: newValue });
  };

  const handleEditEmail = (newValue: string) => {
    setEditComment({ ...editComment, email: newValue });
  };

  const handleEditComment = (newValue: string) => {
    setEditComment({ ...editComment, comment: newValue });
  };

  const handleEdit = (comment: Comment) => {
    setEditComment(comment);
    setEdit(!edit);
  };

  return {
    createComment,
    comment,
    handleEmailChange,
    handleCommentChange,
    getComments,
    commentList,
    deleteComment,
    updateComment,
    edit,
    handleEdit,
    editComment,
    handleEditEmail,
    handleEditComment,
    error,
  };
};
