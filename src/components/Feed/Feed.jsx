import React from 'react'
import './Feed.css'

const Feed = () => {
  return (
    <div>
      <div className="stories content-stories">
        <div className="stories__item add-stories">
          <img src="img/plus.svg" alt=""/>
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
          <img src="img/chat.svg" alt=""/>
        </div>
        <div className="add-post-buttons">
          <button className="post-btn btn">
            <img className="btn-icon" src="img/dslr-camera.svg" alt=""/>
          </button>
          <button className="post-btn btn">
            <img className="btn-icon" src="img/attach.svg" alt=""/>
          </button>
          <button className="post-btn btn">
            <img className="btn-icon" src="img/cat.svg" alt=""/>
          </button>
          <button className="post-btn btn">
            <img className="btn-icon" src="img/more.svg" alt=""/>
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
              <img className="btn-icon" src="img/more.svg" alt=""/>
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
                <img src="img/thumb-up.svg" alt=""/>
                <span>Like</span>
              </button>
              <button className="social-btn btn">
                <img src="img/oval-black-speech-bubble.svg" alt=""/>
                <span>Comment</span>
              </button>
              <button className="social-btn btn">
                <img src="img/share.svg" alt=""/>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="post-head">
            <div className="post-user">
              <div className="user-avatar">
                <img src="https://i.pinimg.com/236x/d8/a3/60/d8a360e9f237bc1689d6954bb43f784f.jpg" alt="post-avatar"/>
              </div>
              <div className="post-user-info">
                <div className="post-user__name">Lawrence Carroll</div>
                <div className="post-user__online">20min</div>
              </div>
            </div>

            <button className="post-action btn">
              <img className="btn-icon" src="img/more.svg" alt=""/>
            </button>
          </div>

          <div className="post-body">
            <div className="post-tags">
              <a href="#">#party</a>
              <a href="#">#friends</a>
              <a href="#">#2021</a>
              <a href="#">#goodday</a>
            </div>
            <div className="post-text">It was a great day!I'm happy right now af :)</div>

            <div className="social-buttons">
              <button className="social-btn btn">
                <img src="img/thumb-up.svg" alt=""/>
                <span>Like</span>
              </button>
              <button className="social-btn btn">
                <img src="img/oval-black-speech-bubble.svg" alt=""/>
                <span>Comment</span>
              </button>
              <button className="social-btn btn">
                <img src="img/share.svg" alt=""/>
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
