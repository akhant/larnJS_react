import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Comment from './Comment';
import Loader from './Loader';
import {checkAllLoadCommentsForPage} from '../AC'
import {connect} from 'react-redux';

class CommentsPagination extends Component {

    componentWillMount(){
        this.props.checkAllLoadCommentsForPage(this.props.page)
    }

    componentWillReceiveProps({page, checkAllLoadCommentsForPage}){
        checkAllLoadCommentsForPage(page)
    }
    getCommentItems(){
        const {comments,loading} = this.props
        if (loading || !comments) return <Loader />
        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        return <ul>
            {commentItems}
        </ul>
    }

    getPaginator(){
        console.log('pagination')
        const {total} = this.props
        const items = []
        for (let i = 1; i <= Math.floor((total-1)/5)+1; i++){
            items.push(<li key={i}><NavLink to={`comments/${i}`} activeStyle={{color: 'red'}}>{i}</NavLink></li>)
        }
        return <ul>
            {items}
        </ul>
    }
    render() {
        const {total } = this.props
        if (!total) return <Loader />
        return (
            <div>
                {this.getCommentItems()}
                {this.getPaginator()}
            </div>
        );
    }
}

CommentsPagination.propTypes = {};
CommentsPagination.defaultProps = {};

export default connect((state, {page}) => {
    const {total, pagination} = state.comments
    return {
        total,
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids'])
    }
}, { checkAllLoadCommentsForPage})(CommentsPagination);
