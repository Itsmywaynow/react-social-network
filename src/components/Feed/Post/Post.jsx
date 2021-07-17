import React from 'react'
import { CommentIcon, LikeIcon, MoreOptionsIcon, ShareIcon } from '../../common/SvgIcons'
import './Post.css'


const Post = (props) => {
  debugger
  return (
    <div className="post">
      <div className="post-head">
        <img className="post-backround" src={props.backgroundImg ? props.backgroundImg : "https://cdn.wallpapersafari.com/48/44/YNe4BW.jpg"} alt="post-background" />
        <div className="post-user">
          <div className="user-avatar">
            <img src="https://poetov.net/upload/031/u3140/4/3/pomnyu-eti-glaza.-picture-normal.jpg" alt="post-avatar"/>
          </div>
          <div className="post-user-info">
            <div className="post-user__name">Rebecca Huff</div>
            <div className="post-user__online">5min</div>
          </div>
        </div>

        <button className="post-action btn">
          <MoreOptionsIcon classes="btn-icon" iconColor="#fff"/>
        </button>
      </div>

      <div className="post-body">
        <div className="post-tags">
          {props.tags.map(tag => <span>#{tag}</span>)}
        </div>
        <div className="post-text">{props.postText}</div>
        <div className="social-buttons">
          <button className="social-btn btn">
            <LikeIcon iconColor={props.isLiked ? "#238cff" :"#5e6380"}/>
            <span>Like</span>
          </button>
          <button className="social-btn btn">
            <CommentIcon/>
            <span>Comment</span>
          </button>
          <button className="social-btn btn">
            <ShareIcon/>
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post