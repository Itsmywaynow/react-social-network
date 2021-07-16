import React from 'react'
import { AddIcon, CatIcon, CommentIcon, LikeIcon, MoreOptionsIcon, PhotoIcon, PostIcon, ShareIcon, TagsIcon } from '../common/SvgIcons'
import './Feed.css'

const Feed = () => {
  return (
    <div>
      <div className="stories content-stories">
        <div className="stories__item add-stories">
          <AddIcon/>
        </div>

        <div className="stories__item story--active">
          <img src="https://pbs.twimg.com/media/EhRMmBqVkAIKPRT.png" alt=""/>
          <span>Kevin</span>
        </div>

        <div className="stories__item story--active">
          <img src="https://zoovet52.ru/wp-content/uploads/2019/12/49e284ec413bd9bb7fd7b12d4b3cc409.jpg" alt=""/>
          <span>Olive</span>
        </div>

        <div className="stories__item">
          <img src="https://i.pinimg.com/736x/4e/4b/d2/4e4bd28682470bd8df1de323267c6de8.jpg" alt=""/>
          <span>Hernandez</span>
        </div>

        <div className="stories__item">
          <img src="https://i.pinimg.com/236x/a6/af/1e/a6af1e398341b6940e453576d9f130a7.jpg" alt=""/>
          <span>Todd</span>
        </div>
      </div>

      <div className="add-post content-add-post">
        <div className="post-field">
          <textarea name="post" id="" placeholder="What's on your mind?"></textarea>
          <PostIcon/>
        </div>
        <div className="add-post-buttons">
          <button className="post-btn btn">
            <PhotoIcon classes="btn-icon"/>
          </button>
          <button className="post-btn btn">
            <TagsIcon classes="btn-icon"/>
          </button>
          <button className="post-btn btn">
            <CatIcon classes="btn-icon"/>
          </button>
          <button className="post-btn btn">
            <MoreOptionsIcon classes="btn-icon" iconColor="#6b6f8a" />
          </button>
        </div>
      </div>

      <div className="posts">
        <div className="post">
          <div className="post-head">
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
              <a href="#">#newyear</a>
              <a href="#">#chinese</a>
              <a href="#">#2021</a>
            </div>
            <div className="post-text">Happy New Year, guys!</div>
            <div className="social-buttons">
              <button className="social-btn btn">
                <LikeIcon/>
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
      </div>
    </div>
  )
}

export default Feed
