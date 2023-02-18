import React, { useState } from 'react'
import Home from '../../assets/home.png'
import Noti from '../../assets/noti.png'
import Comment from '../../assets/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import './TrendSide.css'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const TrendSide = () => {

  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="TrendSide">
        <div className="navIcons">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />

        </div>
        <TrendCard />
        <button className="button ts-button" onClick={() => setModalOpened(true)}>Share</button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default TrendSide