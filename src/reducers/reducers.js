import { combineReducers } from 'redux'
import { SUBREDDIT, SORT, CARD } from '../actions/actions'


const subreddit = (state = 'popular', action) => {
    switch (action.type) {
        case SUBREDDIT:
            console.log(action)
            return action.value
        default:
            return state;
    }
}

const sort = (state = 'hot', action) => {
    switch (action.type) {
        case SORT:
            return action.value
        default:
            return state;
    }
}

const view = (state = 'card', action) => {
    switch (action.type) {
        case CARD:
            return action.value
        default:
            return state;
    }
}

export const reducer = combineReducers({ subreddit, sort, view })
