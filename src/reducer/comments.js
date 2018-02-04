import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {})

export default (articleState = commentsMap, action) => {
    switch (action.type){

        default: return articleState;
    }
}