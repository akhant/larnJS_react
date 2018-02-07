import React , { PureComponent } from 'react';
import CommentsList from './../CommentsList';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './article.css'
import {connect } from 'react-redux';
import {deleteArticle, loadArticle} from "../../AC"
import Loader from '../Loader';
import {loadArticleComments} from '../../AC';



 class Article extends PureComponent {
     static propTypes = {

         isOpen: PropTypes.bool,
         toggleOpen: PropTypes.func,
         id: PropTypes.string,

        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        }),
        deleteArticle: PropTypes.func,
         isCommentsOpen: PropTypes.bool,
         toggleComments: PropTypes.func


    };

     state = {
         updateIndex: 0
     };

     componentDidMount(){
         const {id, loadArticle, article, loadArticleComments} = this.props
            console.log(!article.text,!article.loading )
         if (!article || (!article.text && !article.loading)) {
             loadArticle(id)
         }

         if ( !article.commentsLoading && !article.commentsLoaded) {
             loadArticleComments(article.id)
         }

     }

     handleDelete = () => {
         const { article, deleteArticle} = this.props;
         deleteArticle(article.id)
     };


render(){
    const {commentsLoading,commentsLoaded, article, isOpen, toggleOpen, isCommentsOpen,toggleComments } = this.props;

if (article.loading) return <Loader />

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
                    <button  className='custom_btn'
                             onClick={ toggleComments }>{
                        isCommentsOpen ? 'Hide comments' : 'Show comments'
                    }
                    </button>

                    {isCommentsOpen && (
                        <div>
                        <h3>Комментарии: </h3>
                        <CommentsList
                            article={article}
                            commentsLoading={commentsLoading}
                            commentsLoaded={commentsLoaded}

                        />
                        </div>
                    ) }

                </div>
            )}
            </ReactCSSTransitionGroup>
        </div>
    )
}
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle, loadArticleComments})(toggleOpen(Article));

