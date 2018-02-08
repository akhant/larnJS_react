import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Articles from '../routes/Articles';
import UserForm from '../UserForm';
import Counter from '../Counter';
import Filters from '../Filters'
import './App.css'
import NotFound from '../routes/NotFound';
import CommentsPage from '../routes/CommentsPage'
import {Switch,Redirect, Route, Link, NavLink} from 'react-router-dom'
import history from '../../history'
import {ConnectedRouter} from 'react-router-redux'


export default class App extends Component{

    static childContextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    }

    getChildContext(){
        return {
            user: this.state.username
        }
    }
    state={
        username: ''
    }
    handleUserChange = (username) => this.setState({
        username
    })
    render(){

        return (
            <ConnectedRouter history={history}>
                <div>
                    <div>
                        <h2>Menu:</h2>
                        <div><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}}to="/articles">Articles</NavLink></div>
                    </div>

                    <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                    <Switch>
                        <Route path="/counter" component ={Counter} />
                        <Route path="/filters" component ={Filters} />
                        <Route path="/articles" component ={Articles} />
                        <Route path="/comments" component={CommentsPage} />

                    </Switch>

                </div>
            </ConnectedRouter>
        )
    }
}
