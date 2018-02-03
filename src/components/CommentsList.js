import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm/CommentForm';

class CommentsList extends React.Component  {

    state= {
        commentFormIsOpen: false
        }

    openCommentForm = () => {
        this.setState({
            commentFormIsOpen: !this.state.commentFormIsOpen
        })
    }

    render (){
        const { comments} = this.props;
        let commentElements;
        if (comments) { commentElements = comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>)}
        else { commentElements = <p>No comments yet</p>}

        return (<div>
                <ul>
                    {commentElements}
                </ul>
            <button onClick={this.openCommentForm}>{this.state.commentFormIsOpen ? 'Close': 'Add new comment'}</button>
                {this.state.commentFormIsOpen && <CommentForm /> }
            </div>

        )
    }

};

export default CommentsList;