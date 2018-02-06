import {LOAD_ARTICLE_COMMENTS,START, SUCCESS, FAIL,LOAD_ARTICLE, DELETE_ARTICLE, INCREMENT, CHANGE_SELECTION, CHANGE_DATE_RANGE, ADD_COMMENT,LOAD_ALL_ARTICLES } from '../constants'

export function increment(){
    return ({
        type: INCREMENT
    })
}

export function deleteArticle(id){
    return ({
        type: DELETE_ARTICLE,
        payload: {id}
    })
}

export function changeDateRange(dateRange){
    return ({
        type: CHANGE_DATE_RANGE,
        payload: {dateRange}
    })
}

export function changeSelection(selected){
    return ({
        type: CHANGE_SELECTION,
        payload: {selected}
    })
}

export function addComment(comment,articleId){
    return ({
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    })
}

export function loadAllArticles(){
    return ({
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    })
}

export function loadArticle(id){
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE+START,
            payload: {id}
        })

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_ARTICLE+SUCCESS,
                    payload: {id ,response}
                }))
                .catch(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: {id, error}
                }))

        }, 3000)
    }
}

export function loadArticleComments(articleId){
    return ({
        type: LOAD_ARTICLE_COMMENTS,
        payload: {articleId},
        callAPI: `/api/comment?article=${articleId}`
    })
}

