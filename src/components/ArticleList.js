import React from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';



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
    articles: PropTypes.array.isRequired,
    toggleOpenItem: PropTypes.func.isRequired

}

export default accordion(ArticleList);