import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (articleState = defaultArticles, action) => {
    switch (action.type){
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== action.payload.id);
        default: return articleState;
    }
}