import React from 'react';

import SinglePost from './SinglePost';

import './Posts.css'


function Posts() {
  return (
    <main className='posts-container'>
       <SinglePost />
       <SinglePost />
       <SinglePost />
       <SinglePost />
       <SinglePost />
    </main>
  );
}

export default Posts;
