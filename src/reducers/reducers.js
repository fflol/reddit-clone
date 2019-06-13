import { combineReducers } from 'redux'
import { SWITCH_FETCHING, SUBREDDIT, SORT, VIEW, POSTS, TRENDING_COMMUNITIES, INCREASE_PAGE, RESETE_PAGE } from '../actions/actions'


const fetching = (state = false, action) => {
    switch (action.type) {
        case SWITCH_FETCHING:
            return !state
        default:
            return state;
    }
}

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

const page = (state = 1, action) => {
    switch (action.type) {
        case INCREASE_PAGE:
            return state + 1
        case RESETE_PAGE:
            return 1
        default:
            return state
    }
}

const posts = (state = [], action) => {
    switch (action.type) {
        case POSTS:
            return action.value
        default:
            return state;
    }
}

const trendingCommunities = (state = [], action) => {
    switch (action.type) {
        case TRENDING_COMMUNITIES:
            return action.value
        default:
            return state;
    }
}

export const reducer = combineReducers({ fetching, subreddit, sort, view, page, posts, trendingCommunities })
