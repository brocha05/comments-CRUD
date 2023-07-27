import axios from "axios";
import { useState } from "react";
import { Comment } from "../types/comment";

export const useComment = () => {
  const [comment, setComment] = useState<Comment>({ email: "", comment: "" });
  const [editComment, setEditComment] = useState<Comment>({
    email: "",
    comment: "",
  });
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [edit, setEdit] = useState(false);

  const createComment = async () => {
    try {
      await axios.post("http://localhost:3000/comment", comment);
      setCommentList([...commentList, comment]);
      setComment({ email: "", comment: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async () => {
    try {
      const result = await axios.get("http://localhost:3000/comments");
      setCommentList(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/comment/${id}`);
      setCommentList(commentList.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateComment = async (comment: Comment) => {
    try {
      await axios.put(`http://localhost:3000/comment/${comment.id}`, comment);
      setCommentList(commentList.map((comentario) => {
          if (comentario.id === comment.id) {
            return {
              ...comentario,
              ...comment,
            };
          }
          return comentario;
        })
      );

      getComments();
      setEdit(false);
    } catch (error) {
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
  };
};
