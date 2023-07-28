import {Comment} from './comment'

export interface CommentProps {
    email: string,
    commentary: string,
    comment: Comment,
    handleEdit: (comment: Comment) => void,
    deleteComment: (id: number) => void,
}