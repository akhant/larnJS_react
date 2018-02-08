import React, { Component } from 'react';
import './errors.css'
import {addComment} from '../../AC';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    handleSubmit = e => {
        e.preventDefault()
       this.props.addCom(this.state)
    }

    getClassName = type => this.state[type].length && (this.state[type].length < this.limits[type].min) ? "error_border" : ''

    onChange = type => e => {
        const {value} = e.target
        if (value.length > this.limits[type].max) return;
        this.setState({
            [type]: value
        })
    }
     limits = {
        user: {
            min: 5,
            max: 15
        },
        text: {
            min: 15,
            max: 50
        }
    }
    render() {

        return (
            <div>
                <h2>Add comment:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user">Your name:</label><br />
                    <input  name="user"
                            value={this.state.user}
                            onChange={this.onChange('user')}
                            className={this.getClassName('user')} /><br />
                    <label htmlFor="text">Your comment:</label><br />
                    <textarea
                        name="text" value={this.state.text}
                        onChange={this.onChange('text')}
                        className={this.getClassName('text')}/><br />
                    <input type="submit" className="custom_btn" value="submit" />
                </form>

            </div>
        );
    }
}

CommentForm.propTypes = {
    //from CommentList
    articleId: PropTypes.string.isRequired
};
CommentForm.defaultProps = {};

export default connect(null, (dispatch, ownProps) => {
        return {
            addCom: (comment) =>dispatch(addComment(comment, ownProps.articleId))
        }
    }
)(CommentForm);
