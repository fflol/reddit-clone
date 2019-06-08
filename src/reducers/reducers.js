import { combineReducers } from 'redux'
import { SUBREDDIT, SORT, VIEW, POSTS } from '../actions/actions'


const subreddit = (state = 'popular', action) => {
    switch (action.type) {
        case SUBREDDIT:
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
        case VIEW:
            return action.value
        default:
            return state;
    }
}

const posts = (state = [], action) => {
    switch (action.type) {
        case POSTS:
            // console.log('reducing: ')
            return action.value
        default:
            return state;
    }
}

export const reducer = combineReducers({ subreddit, sort, view, posts })
