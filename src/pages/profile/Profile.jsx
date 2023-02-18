import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import TrendSide from '../../components/TrendSide/TrendSide'
import Post from '../../components/Post/Post'
import './Profile.css'

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="ProfileCenter">
        <ProfileCard />
        <Post />
      </div>
      <TrendSide />
    </div>
  )
}

export default Profile