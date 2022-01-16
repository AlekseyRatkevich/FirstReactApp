import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

  console.log(props.message);

  return (
    <div className={s.item}>
      <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png'></img>
      {props.message }
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post
