import React from 'react';

 const Comment = (props) => {


        const {comment} = props;
        return (
            <div>

                <h4>Пользователь: {comment.user}</h4>
                <section>{comment.text}</section>


            </div>
        )


}

export default Comment;