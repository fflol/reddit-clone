import snoowrap from 'snoowrap'

import { storePosts } from './actions'
import { oauthInfo } from '../oauthInfo'

const r = new snoowrap(oauthInfo)


export const asyncFetchPosts = (subreddit, sort) => {
    console.log('fetch posts fired |', subreddit, sort)
    switch (sort) {
        case 'hot':
            return dispatch => {
                return r.getHot(subreddit, { limit: 15 })
                    .then(res => dispatch(storePosts(res)))
                    .catch(err => dispatch(console.log(err)))
            }
        case 'new':
            return dispatch => {
                return r.getNew(subreddit, { limit: 15 })
                    .then(res => dispatch(storePosts(res)))
                    .catch(err => dispatch(console.log(err)))
            }
        case 'controversial':
            return dispatch => {
                return r.getControversial(subreddit, { limit: 15 })
                    .then(res => dispatch(storePosts(res)))
                    .catch(err => dispatch(console.log(err)))
            }
        case 'top':
            return dispatch => {
                return r.getTop(subreddit, { limit: 15 })
                    .then(res => dispatch(storePosts(res)))
                    .catch(err => dispatch(console.log(err)))
            }
        case 'rising':
            return dispatch => {
                return r.getRising(subreddit, { limit: 15 })
                    .then(res => dispatch(storePosts(res)))
                    .catch(err => dispatch(console.log(err)))
            }
        default:
            console.log('default returned')
            return
    }
}


// export const get5DayAsnc = (location) => {
//     console.log('get hourly asnc fired')
//     return dispatch => {
//         return axios
//             .get(
//                 link5Day,
//                 {
//                     params: {
//                         lat: location.lat,
//                         lon: location.lon,
//                         appid: id
//                     }
//                 })
//             .then((res) => dispatch(get5Day(res)))
//             .catch((err) => dispatch(errorCatch(err)))
//     }
// }