import {normalizedComments as defaultComments} from '../fixtures';
import { arrToMap} from '../helpers';
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from '../constants'
import { Record, OrderedMap} from 'immutable';

const CommentRecord  = Record({
    id: null,
    text: null,
    user: null

})

const ReducerState = Record({
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const { type, payload,res, randomId} = action;
    switch (type){
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

        case LOAD_ARTICLE_COMMENTS+SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(res, CommentRecord)))

        default: return commentsState;
    }
}