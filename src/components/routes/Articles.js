import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../ArticleList';
import Article from '../Article/index';
import {Route} from 'react-router-dom';

class Articles extends Component {

    getArticle = ({match}) => {
        const {id} = match.params
        return <Article id = {id} isOpen key={id} />
    }
    getIndex = ({ match}) => {
        if (!match) return null
        return <h2>Please select article</h2>
    }

    render() {

        return (
            <div>
                <ArticleList />
                <Route path="/articles/" children={this.getIndex} exact/>
                <Route path="/articles/:id" render={this.getArticle} />
            </div>
        );
    }
}

Articles.propTypes = {};
Articles.defaultProps = {};

export default Articles;
