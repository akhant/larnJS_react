import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    static propTypes = {
    username: PropTypes.string.isRequired
}
    state={
        username: ''
    }
    onChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div className="UserForm">Name: <input type = 'text' value={this.state.username} onChange={this.onChange}/></div>
        );
    }
}

UserForm.propTypes = {};
UserForm.defaultProps = {};

export default UserForm;
