import React, { Component } from 'react';
import './errors.css'

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length && (this.state[type].length < this.limits[type].min) ? "error_border" : ''


    onChange = type => e => {
        const {value} = e.target
        if (value.length> this.limits[type].max) return;
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
                <form onSubmit={this.onSubmit}>
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
                    <button>Add comment</button>
                </form>

            </div>
        );
    }

}

CommentForm.propTypes = {};
CommentForm.defaultProps = {};

export default CommentForm;
