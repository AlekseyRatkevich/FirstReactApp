import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  console.log(props.message)

  return (
    <div className={s.item}>
      <div>
        <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png'></img>
      </div>
      <div className={s.postUsername}>Anonymous</div>
      <div className={s.postContainer}>
        <div className={s.postText}>{props.message}</div>
        <div className={s.postLike}>
          <span>Like</span>
        </div>
      </div>
    </div>
  )
}

export default Post
