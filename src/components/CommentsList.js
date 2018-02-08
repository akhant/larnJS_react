import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm/CommentForm';
import PropTypes from 'prop-types';

class CommentsList extends React.Component  {



    render(){
        const {article, commentsLoading} = this.props;
        function getBody({article: {comments = [], id}}){
            if (commentsLoading) return <Loader />
            if (!comments.length) return <div> <p>No comments yet</p> </div>
            return (
                <div>

                    <ul>
                        {comments.map(newId => <li key={newId} ><Comment id = {newId}/></li>)}
                    </ul>
                    <CommentForm articleId = {id} />
                </div>
            )
        }
        return (
            <div>
                {getBody({article})}
            </div>
        )
    }

    }



CommentsList.propTypes = {
    //from Article, Article from connect
    comments: PropTypes.array,
    //from Article, Article from CWRP
    commentsLoading: PropTypes.bool,
    commentsLoaded: PropTypes.bool,

}

export default CommentsList;