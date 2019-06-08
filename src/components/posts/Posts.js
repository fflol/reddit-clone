import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { asyncFetchPosts } from '../../actions/snoowrapActions'

import SinglePost from './SinglePost';

import './Posts.css'


const Posts = ({ subreddit, sort, asyncFetchPosts, posts }) => {

  useEffect(() => {
    asyncFetchPosts(subreddit, sort)
  }, [subreddit, sort])

  console.log('posts:', posts)

  return (
    <main className='posts-container'>
      {/* {posts.length === 0 ? <h1>loading ... </h1> : <h1>done</h1>} */}
      {posts.length === 0 ? <h1>loading ... </h1> : posts.map(post => <SinglePost key={post.id} post={post} />)}
    </main>
  )
}



const mapStateToProps = (state) => {
  return {
    subreddit: state.subreddit,
    sort: state.sort,
    posts: state.posts
  }
}

export default connect(mapStateToProps, { asyncFetchPosts })(Posts)
