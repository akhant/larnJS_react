import React , { PureComponent } from 'react';
import CommentsList from './../CommentsList';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './article.css'
import {connect } from 'react-redux';
import {deleteArticle} from "../../AC"

 class Article extends PureComponent {
     static propTypes = {
        //from ArticleList
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        //from connect
        deleteArticle: PropTypes.func
    };

     state = {
         updateIndex: 0
     };

     handleDelete = () => {
         const { article, deleteArticle} = this.props;
         deleteArticle(article.id)


     };

render(){
    const {article, isOpen, toggleOpen, isCommentsOpen,toggleComments } = this.props;
    return (
        <div>

            <h3>{article.title}</h3>
            <button className='custom_btn' onClick={ toggleOpen }>{isOpen ? 'close' : 'open'}</button>
            <button className='custom_btn' onClick={this.handleDelete}>delete article</button>
            <ReactCSSTransitionGroup transitionName="article"
                                     transitionEnterTimeout={300}
                                     transitionLeaveTimeout={300}
            >
                {isOpen && <section>{article.text}</section> }

            {isOpen && (
                <div>
                    <button  className='custom_btn' onClick={ toggleComments }>{isCommentsOpen ? 'Hide comments' : 'Show comments'}</button>

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

export default connect(null, {deleteArticle})(toggleOpen(Article));

