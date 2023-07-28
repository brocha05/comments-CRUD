import { Comment } from "./comment";

export interface FormProps {
    comment: Comment,
    error: boolean,
    handleEmailChange: (newValue: string) => void,
    handleCommentChange: (newValue: string) => void,
    createComment: () => void,
}