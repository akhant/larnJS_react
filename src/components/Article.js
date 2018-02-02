import React from 'react';
import CommentsList from './CommentsList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';


 class Article extends React.Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired,
        isCommentsOpen: PropTypes.bool.isRequired,
        toggleComments: PropTypes.func.isRequired
    }





render(){
    const {article, isOpen, toggleOpen, isCommentsOpen,toggleComments } = this.props;
    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick={ toggleOpen }>{isOpen ? 'close' : 'open'}</button>
            {isOpen && <section>{article.text}</section> }
            {isOpen && (
                <div>

                    <button onClick={ toggleComments }>{isCommentsOpen ? 'Hide comments' : 'Show comments'}</button>
                    {isCommentsOpen && (
                        <div>
                        <h3>Комментарии: </h3>
                        <CommentsList comments={article.comments} />
                        </div>
                    ) }
                </div>
            )}



        </div>
    )
}



}

export default toggleOpen(Article);

