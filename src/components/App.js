import React from 'react';
import ArticleList from './ArticleList';
import { articles } from '../fixtures';


export default class App extends React.Component{

    render(){
        return (
            <div>
                <ArticleList articles = {articles} />
            </div>
        )
    }
}
