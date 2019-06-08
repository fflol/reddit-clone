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

export const POSTS = 'posts'
export const storePosts = (value) => {
    // console.log('posts: ', value)
    return {
        type: POSTS,
        value
    }
}
