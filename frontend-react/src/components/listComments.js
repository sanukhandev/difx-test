import CommentBlock from "./commentBlock";

const ListComments = ({ comments }) => {
    return (
        comments.map(comment => {
            return (
                <CommentBlock key={comment.id} user={`${comment.user.firstName}`} comment={comment.comment} commentedOn={comment.commentedOn} avatar={`https://randomuser.me/api/portraits/men/34.jpg`} />
            )
        })
    )
}
export default ListComments