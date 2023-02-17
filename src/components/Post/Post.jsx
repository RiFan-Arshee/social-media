import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './Post.css'

const Post = () => {
  return (
    <div className="Post">
        <PostShare />
        <Posts />
    </div>
  )
}

export default Post