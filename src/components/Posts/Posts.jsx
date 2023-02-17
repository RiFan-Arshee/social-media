import React from 'react'
import './Posts.css'
import {PostData} from '../../Data/PostData'
import SharedPost from '../SharedPost/SharedPost'

const Posts = () => {
  return (
    <div className="Posts">
        {PostData.map((post, id) => {
            return <SharedPost data={post} key={id} />
        })}
    </div>
  )
}

export default Posts