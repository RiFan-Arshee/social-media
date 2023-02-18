import React from 'react'
import './SharedPost.css'
import Comment from '../../assets/comment.png'
import Share from '../../assets/share.png'
import Heart from '../../assets/like.png'
import NotLike from '../../assets/notlike.png'

const SharedPost = ({data, id}) => {
  return (
    <div className="SharedPost" key={id}>
        <img src={data.img} alt="" />
        <div className="postReact">
            <img src={data.liked? Heart : NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color: 'var(--gray)', fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default SharedPost