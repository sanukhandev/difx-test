import CommentBlock from "./commentBlock";

const ListComments = ({ comments }) => {
    comments = [
        {
            id: 1,
            user: {
                name: 'Sarah',
                avatar: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
            },
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        },
        {
            id: 2,
            user: {
                name: 'Sarah',
                avatar: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
            },
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        },
    ]
    return (
        comments.map(comment => {
            return (
                <CommentBlock key={comment.id} comment={comment} />
            )
        })
    )
}
export default ListComments