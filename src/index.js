import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ArticleList from './ArticleList';
import { articles } from './fixtures';


ReactDOM.render(<ArticleList articles = {articles}/>, document.getElementById('root'));
registerServiceWorker();
