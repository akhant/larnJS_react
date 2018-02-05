import React from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import {commentSelectorFactory} from '../selectors';

 const Comment = ({comment}) => {
        return (
            <div>
                <h4>Пользователь: {comment.user}</h4>
                <section>{comment.text}</section>
            </div>
        )
}

Comment.propTypes = {
        comment: PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.string,
        text: PropTypes.string
    }).isRequired


}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment);