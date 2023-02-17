import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Profile.css'

const Profile = () => {
  return (
    <div className="Profile">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  )
}

export default Profile