import React, {Component} from 'react';
import ArticleList from './../ArticleList';
import UserForm from './../UserForm';
import Counter from './../Counter';
import Filters from './../Filters'
import './App.css'

export default class App extends Component{

    render(){

        return (
            <div>
                <Counter />
                <UserForm />
                <Filters />
                <ArticleList />
            </div>
        )
    }
}
