import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm/CommentForm';
import PropTypes from 'prop-types';

function CommentsList({article}) {

return (
    <div>
        {getBody({article})}
    </div>
)
    }

function getBody({article: {comments = [], id}}){
    console.log('comments', comments)
    return (
        <div>
            <ul>
                {comments.map(newId => <li key={newId} ><Comment id = {newId}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

CommentsList.propTypese = {
    comments: PropTypes.array
}

export default CommentsList;