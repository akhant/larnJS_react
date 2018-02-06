import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants'
import { Record, OrderedMap} from 'immutable';

const ArticleRecord  = Record({
    id: undefined,
    title: '',
    text: undefined,
    comments: []

})
const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()



export default (articleState = defaultState, action) => {
    const { type, payload, randomId,res } = action;

    switch (type){

        case DELETE_ARTICLE:
            return articleState.deleteIn(['entities',payload.id])

        case ADD_COMMENT:
            return articleState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

        /*const article = articleState[payload.articleId]
        return {
            ...articleState,
            [payload.articleId]: {
                ...article,
                comments: (article.comments || [] ).concat(randomId)
            }
        };*/

        case LOAD_ALL_ARTICLES:
            return articleState.set('entities', arrToMap(res,ArticleRecord));

        default:
            return articleState;

    }
}