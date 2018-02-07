import React, {Component} from 'react';
import Articles from '../routes/Articles';
import UserForm from '../UserForm';
import Counter from '../Counter';
import Filters from '../Filters'
import './App.css'
import NotFound from '../routes/NotFound';
import CommentsPage from '../routes/CommentsPage'
import {BrowserRouter as Router,Switch, Route, Link, NavLink} from 'react-router-dom'


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
                    <Switch>
                        <Route path="/counter" component ={Counter} />
                        <Route path="/filters" component ={Filters} />
                        <Route path="/articles" component ={Articles} />
                        <Route path="/comments/:page" component={CommentsPage} />

                    </Switch>

                </div>
            </Router>
        )
    }
}
