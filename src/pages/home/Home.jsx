import React from 'react'
import Post from '../../components/Post/Post'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import TrendSide from '../../components/TrendSide/TrendSide'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <Post />
        <TrendSide />
    </div>
  )
}

export default Home