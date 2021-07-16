import React from 'react'
import { ChatIcon, FullscreenIcon } from '../common/SvgIcons'
import './Chat.css'

const Chat = () => {
  return (
    <div className="social-panel">
    <div className="chat">
      <div className="chat-header">
        <h2 className="chat-header__title">Quick chat</h2>
        <div className="chat-header__expand">
          <FullscreenIcon/>
        </div>
      </div>

      <ul className="unread-messages">
        <li className="unread-message">
          <div className="message-mount">2</div>
          <span className="message-sender">Jeanette Thornton</span>
        </li>

        <li className="unread-message">
          <div className="message-mount">1</div>
          <span className="message-sender">Sallie Walton</span>
        </li>
      </ul>

      <div className="message-wrapper">
        <div className="message-box">
          <div className="message-group-received">
            <div className="user-avatar">
              <img src="https://i.pravatar.cc/300" alt=""/>
            </div>
            <div>
              <div className="message-received">
                <div className="message-received-text">Good day!Have u prepaired the slide deck for me?</div>
              </div>
            </div>
          </div>
          
          <div className="message-group-sent">
              <div className="message-sent">
                <div className="message-sent-text">Yes! Wait me a sec</div>
                <div className="user-avatar message-sent-status">
                  <img src="https://i.pravatar.cc/50" alt=""/>
                </div>
              </div>
            </div>
            
            <div className="message-group-received">
              <div className="user-avatar">
                <img src="https://i.pravatar.cc/300" alt=""/>
              </div>
              <div>
                <div className="message-received">
                  <div className="message-received-text">Looks good!Thanks a lot!</div>
                </div>
              </div>
            </div>
        </div>
        <form className="send-message-form">
          <div className="message-textarea-wrapper">
            <textarea className="message-textarea" placeholder="Type something..."></textarea>
            <ChatIcon classes="message-icon"/>
          </div>
        </form>
      </div>

    </div>

    <ul className="users">
      <li className="user">
        <div className="user-avatar">
          <img src="https://poetov.net/upload/031/u3140/4/3/pomnyu-eti-glaza.-picture-normal.jpg" alt="post-avatar"/>
        </div>
        <div className="user-name social-panel__user">Rebecca Huff</div>
        <div className="user-status online"></div>
      </li>

      <li className="user">
        <div className="user-avatar">
          <img src="https://poetov.net/upload/031/u3140/4/3/pomnyu-eti-glaza.-picture-normal.jpg" alt="post-avatar"/>
        </div>
        <div className="user-name social-panel__user">Rebecca Huff</div>
        <div className="user-status">5 min</div>
      </li>
    </ul>
  </div>
  )
}

export default Chat
