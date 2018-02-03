import React from 'react';
import Article from './Article/Article';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import {deleteArticle} from '../AC';


class ArticleList extends React.Component {
   render(){
        const {articles, openItemId, toggleOpenItem} = this.props;
        const articleElements = articles.map( article =>  <li key={article.id}>
            <Article
                article = {article}
                isOpen={article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

};

ArticleList.propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    //from decorator accordion
    toggleOpenItem: PropTypes.func.isRequired

}

export default connect(state => ({articles: state.articles}), {deleteArticle})(accordion(ArticleList));