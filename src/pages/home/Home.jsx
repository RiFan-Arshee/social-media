import React from 'react'
import Profile from '../../components/Profile/Profile'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <Profile />
        <div className="postSide">Post side</div>
        <div className="rightSide">Right side</div>
    </div>
  )
}

export default Home