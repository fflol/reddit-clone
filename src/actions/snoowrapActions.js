import snoowrap from 'snoowrap'

import { storePosts, storeTrendingCommunities, switchFetching } from './actions'
import { oauthInfo } from '../oauthInfo'

export const r = new snoowrap(oauthInfo)


export const asyncFetchPosts = (subreddit, sort, page) => {
    switch (sort) {
        case 'hot':
            return dispatch => {
                dispatch(switchFetching())
                return r.getHot(subreddit, { limit: 10 * page })
                    .then(res => {
                        dispatch(switchFetching())
                        dispatch(storePosts(res))
                    })
                    .catch(err => console.log(err))
            }
        case 'new':
            return dispatch => {
                dispatch(switchFetching())
                return r.getNew(subreddit, { limit: 10 * page })
                    .then(res => {
                        dispatch(switchFetching())
                        dispatch(storePosts(res))
                    })
                    .catch(err => console.log(err))
            }
        case 'controversial':
            return dispatch => {
                dispatch(switchFetching())
                return r.getControversial(subreddit, { limit: 10 * page })
                    .then(res => {
                        dispatch(switchFetching())
                        dispatch(storePosts(res))
                    })
                    .catch(err => console.log(err))
            }
        case 'top':
            return dispatch => {
                dispatch(switchFetching())
                return r.getTop(subreddit, { limit: 10 * page })
                    .then(res => {
                        dispatch(switchFetching())
                        dispatch(storePosts(res))
                    })
                    .catch(err => console.log(err))
            }
        case 'rising':
            return dispatch => {
                dispatch(switchFetching())
                return r.getRising(subreddit, { limit: 10 * page })
                    .then(res => {
                        dispatch(switchFetching())
                        dispatch(storePosts(res))
                    })
                    .catch(err => console.log(err))
            }
        default:
            return
    }
}


export const asyncFetchTrendingCommunities = () => {
    return dispatch => {
        return r.getPopularSubreddits({ limit: 5 })
            .then(res => dispatch(storeTrendingCommunities(res)))
            .catch(err => console.log(err))
    }
}


export const asyncSearch = (input) => {
    return dispatch => {
        dispatch(switchFetching())
        return r.search({
            query: input,
            limit: 15,
            sort: 'top'
        })
            .then(res => {
                dispatch(switchFetching())
                dispatch(storePosts(res))
            })
            .catch(err => console.log(err))
    }
}