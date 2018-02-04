import {normalizedComments as defaultComments} from '../fixtures'


export default (articleState = defaultComments, action) => {
    switch (action.type){

        default: return articleState;
    }
}