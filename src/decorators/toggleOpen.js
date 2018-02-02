import React from 'react';

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        isCommentsOpen: false
    }

    toggleComments =() => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }
    render(){
        return <OriginalComponent {...this.props} {...this.state} toggleComments={this.toggleComments}   />
    }
}