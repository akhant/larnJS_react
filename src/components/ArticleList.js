import React from 'react';
import Article from './Article/index';

import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { filtratedArticlesSelector } from '../selectors';
import {loadAllArticles} from '../AC'
import Loader from './Loader'
import { NavLink} from 'react-router-dom'



class ArticleList extends React.Component {
    componentDidMount(){
        const {loaded,loading,loadAllArticles} = this.props;
        if (!loaded || !loading) loadAllArticles();
    }
   render(){
        const {articles,  loading} = this.props;
       if (loading) return <Loader />
        const articleElements = articles.map( article =>  <li key={article.id}>
            <NavLink to={`/articles/${article.id}`} activeStyle={{color: 'red'}}>
                {article.title}
            </NavLink>
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
    /*articles: PropTypes.array.isRequired,*/
    //from decorator accordion
    toggleOpenItem: PropTypes.func

}

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(ArticleList);

/*<Article
 article = {article}
 isOpen={article.id === openItemId}
 toggleOpen = {toggleOpenItem(article.id)}
 />*/