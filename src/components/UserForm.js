import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {


    handleUserChange = (e) => {
        if (e.target.value.length > 10) return
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div className="UserForm">Name: <input type = 'text' value={this.props.value} onChange={this.handleUserChange}/></div>
        );
    }
}

UserForm.propTypes = {};
UserForm.defaultProps = {};

export default UserForm;
