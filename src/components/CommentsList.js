import React from 'react';
import Comment from './Comment';



const CommentsList = ({comments}) => {
    let commentElements;
    if (comments) { commentElements = comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>)}
    else { commentElements = <p>No comments yet</p>}

    return (
        <ul>
            {commentElements}
        </ul>
    )
};

export default CommentsList;