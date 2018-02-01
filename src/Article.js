import React from 'react';
import CommentsList from './CommentsList';


export default class Article extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
            isCommentsOpen: false
        };

    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleComments =() => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }
render(){
    const {article} = this.props;
    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick={ this.toggleOpen }>{this.state.isOpen ? 'close' : 'open'}</button>
            {this.state.isOpen && <section>{article.text}</section> }
            {this.state.isOpen && (
                <div>

                    <button onClick={ this.toggleComments }>{this.state.isCommentsOpen ? 'Hide comments' : 'Show comments'}</button>
                    {this.state.isCommentsOpen && (
                        <div>
                        <h3>Комментарии: </h3>
                        <CommentsList comments={article.comments} />
                        </div>
                    ) }
                </div>
            )}



        </div>
    )
}

}


