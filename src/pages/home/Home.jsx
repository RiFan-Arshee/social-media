import React from 'react'
import Post from '../../components/Post/Post'
import Profile from '../../components/Profile/Profile'
import TrendSide from '../../components/TrendSide/TrendSide'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <Profile />
        <Post />
        <TrendSide />
    </div>
  )
}

export default Home