import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, CHANGE_SELECTION, CHANGE_DATE_RANGE} from '../constants'
const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    switch (action.type){

        case CHANGE_DATE_RANGE:
            return {...filters, dateRange: action.payload.dateRange};

        case CHANGE_SELECTION:
            return {...filters, selected: action.payload.selected};

        case DELETE_ARTICLE:
            return {...filters, selected: filters.selected.filter(id => id !== action.payload.id)};

        default: return filters;
    }
}