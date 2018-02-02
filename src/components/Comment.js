import React from 'react';
import PropTypes from 'prop-types';

 const Comment = (props) => {


        const {comment} = props;
        return (
            <div>

                <h4>Пользователь: {comment.user}</h4>
                <section>{comment.text}</section>


            </div>
        )


}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string
    }).isRequired

}

export default Comment;