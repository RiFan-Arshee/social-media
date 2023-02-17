import React from 'react'
import Cover from '../../assets/cover.jpg'
import Profile from '../../assets/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span>Ruby Rose</span>
            <span>Senior Backend Developer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>110</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>8,347</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>


        <span>
            My Profile
        </span>

    </div>
  )
}

export default ProfileCard