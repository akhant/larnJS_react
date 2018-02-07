import {normalizedComments as defaultComments} from '../fixtures';
import { arrToMap} from '../helpers';
import { LOAD_COMMENTS_FOR_PAGE,START, ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from '../constants'
import { Record, OrderedMap, Map} from 'immutable';

const CommentRecord  = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const { type, payload, res, randomId} = action;
    switch (type){
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

        case LOAD_ARTICLE_COMMENTS+SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(res, CommentRecord)))

        case LOAD_COMMENTS_FOR_PAGE+START:
            return commentsState.setIn(['pagination', payload.page, 'loading'], true)

        case LOAD_COMMENTS_FOR_PAGE+SUCCESS:
            return commentsState
                .set('total', res.total)
                .mergeIn(['entities'], arrToMap(res.records, CommentRecord))
                .setIn(['pagination', payload.page, 'ids'], res.records.map(comment => comment.id))
                .setIn(['pagination', payload.page, 'loading'], false)
        default: return commentsState;
    }
}