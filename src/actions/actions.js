import snoowrap from 'snoowrap'

import { oauthInfo } from '../oauthInfo'

export const r = new snoowrap(oauthInfo)


export const SUBREDDIT = 'subreddit'
export const chooseSubreddit = (value) => {
    return {
        type: SUBREDDIT,
        value
    }

}

export const SORT = 'sort'
export const chooseSort = (value) => {
    return {
        type: SORT,
        value
    }

}

export const CARD = 'card'