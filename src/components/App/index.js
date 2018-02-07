import React, {Component} from 'react';
import ArticleList from './../ArticleList';
import UserForm from './../UserForm';
import Counter from './../Counter';
import Filters from './../Filters'
import './App.css'
import {HashRouter as Router, Route, Link, NavLink} from 'react-router-dom'


export default class App extends Component{

    render(){

        return (
            <Router >
                <div>
                    <div>
                        <h2>Menu:</h2>
                        <div><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}}to="/articles">Articles</NavLink></div>
                    </div>

                    <UserForm />
                    <Route path="/counter" component ={Counter} />
                    <Route path="/filters" component ={Filters} />
                    <Route path="/articles" component ={ArticleList} />
                </div>
            </Router>
        )
    }
}
