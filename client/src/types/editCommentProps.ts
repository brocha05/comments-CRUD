import { Comment } from "./comment";

export interface EditCommentProps{
    email: string,
    commentary: string,
    comment: Comment,
    editComment: Comment,
    handleEditEmail: (value: string) => void,
    handleEditComment: (value: string) => void,
    handleEdit: (comment: Comment) => void,
    updateComment: (comment: Comment) => void, 
}