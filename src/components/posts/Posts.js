import React, { useEffect } from 'react';

// import components
import SinglePostCard from './SinglePostCard';
import SinglePostClassic from './SinglePostClassic';

// import redux components
import { connect } from 'react-redux'

// import actions
import { asyncFetchPosts } from '../../actions/snoowrapActions'
import { increasePage, resetPage } from '../../actions/actions'

// import infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

// import css
import './Posts.css'


// component 
const Posts = ({
  subreddit,
  sort,
  asyncFetchPosts,
  page,
  posts,
  view,
  fetching,
  resetPage,
  increasePage
}) => {

  useEffect(() => {
    resetPage()
  }, [resetPage, subreddit, sort])

  useEffect(() => {
    asyncFetchPosts(subreddit, sort, page)
  }, [asyncFetchPosts, subreddit, sort, page])

  // console.log('posts:', posts)

  const viewPosts = () => {
    switch (view) {
      case 'card':
        return post => <SinglePostCard key={post.id} post={post} />
      case 'classic':
        return post => <SinglePostClassic key={post.id} post={post} />
      case 'compact':
        return post => <SinglePostCard key={post.id} post={post} />
      default:
        return
    }
  }

  // when view is set to classic, reset the container width
  // const viewContainerWidth = () => {
  //   if (view === 'classic' && fetching === false) return 'width-auto'
  //   else return ''
  // }


  return (
    <main className={`posts-container`}>

      <InfiniteScroll
        pullDownToRefresh
        refreshFunction={resetPage}
        dataLength={posts.length}
        next={increasePage}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {posts.map(viewPosts(view))}
      </InfiniteScroll>

    </main>
  )
}


const mapStateToProps = (state) => {
  return {
    subreddit: state.subreddit,
    sort: state.sort,
    page: state.page,
    posts: state.posts,
    view: state.view,
    fetching: state.fetching,
  }
}

export default connect(mapStateToProps, { asyncFetchPosts, increasePage, resetPage })(Posts)