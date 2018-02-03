import React from 'react';
import Article from './Article/Article';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';



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
            <div className="ArticleList">
            <ul>
                {articleElements}
            </ul>
            </div>
        )
    }

};

ArticleList.propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    //from decorator accordion
    toggleOpenItem: PropTypes.func.isRequired

}

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter( article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });
    return {
        articles: filteredArticles
    }
})(accordion(ArticleList));