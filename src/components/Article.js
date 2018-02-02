import React , { PureComponent } from 'react';
import CommentsList from './CommentsList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './article.css'

 class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

     state ={
         updateIndex: 0
     }


render(){
    const {article, isOpen, toggleOpen, isCommentsOpen,toggleComments } = this.props;
    return (
        <div>

            <h3>{article.title}</h3>
            <button onClick={ toggleOpen }>{isOpen ? 'close' : 'open'}</button>
            <ReactCSSTransitionGroup transitionName="article"
                                     transitionEnterTimeout={300}
                                     transitionLeaveTimeout={300}
            >
                {isOpen && <section>{article.text}</section> }

            {isOpen && (
                <div>
                    <button  onClick={ toggleComments }>{isCommentsOpen ? 'Hide comments' : 'Show comments'}</button>

                    {isCommentsOpen && (
                        <div>
                        <h3>Комментарии: </h3>
                        <CommentsList comments={article.comments}  />
                        </div>
                    ) }

                </div>
            )}
            </ReactCSSTransitionGroup>
        </div>
    )
}
}

export default toggleOpen(Article);

