import React from 'react'
import Post from '../../components/Post/Post'
import Profile from '../../components/Profile/Profile'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <Profile />
        <Post />
        <div className="rightSide">Right side</div>
    </div>
  )
}

export default Home