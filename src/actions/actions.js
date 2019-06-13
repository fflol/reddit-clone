export const SWITCH_FETCHING = 'switch fetching'
export const switchFetching = () => {
    return {
        type: SWITCH_FETCHING,
    }
}

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

export const VIEW = 'view'
export const chooseView = (value) => {
    return {
        type: VIEW,
        value
    }
}

export const INCREASE_PAGE = 'increase page' 
export const increasePage = () => {
    return {
        type: INCREASE_PAGE
    }
}

export const RESETE_PAGE = 'reset page' 
export const resetPage = () => {
    return {
        type: RESETE_PAGE
    }
}

export const POSTS = 'posts'
export const storePosts = (value) => {
    return {
        type: POSTS,
        value
    }
}

export const TRENDING_COMMUNITIES = 'trending communities'
export const storeTrendingCommunities = (value) => {
    return {
        type: TRENDING_COMMUNITIES,
        value
    }
}