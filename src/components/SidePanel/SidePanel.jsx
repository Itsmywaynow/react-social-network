import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidePanel.css'


const SidePanel = () => {
  return (
    <aside className="aside-panel">
      <div className="aside-top">
        <div className="input-group aside-input-group">
          <input className="input-search" type="text" placeholder="Search"/>
          <img className="search-icon icon" src="img/search.svg" alt=""/>
        </div>
        <div className="profile-info">
          <div className="profile-info__avatar avatar">
            <img src="https://sun9-81.userapi.com/impf/c856132/v856132401/c5eab/P6PiSgVNYKw.jpg?size=1280x960&quality=96&sign=5f448f202fd0b6dc2511ef51e24af813&type=album" alt="avatar"/>
          </div>
          <div>
            <div className="profile-info__fullname">Lester Shaw</div>
            <div className="profile-info__username">@Shaw20</div>
          </div>
        </div>
      </div>

      <div clNavLinkssName="aside-body">
        <nav className="nav">
          <NavLink to="/feed" className="nav-link">
              <div className="nav-img">
                <img src="img/home.svg" alt="home"/>
              </div>
            <span>New Feed</span>
          </NavLink>
          <NavLink to="/fadf" className="nav-link">
            <div className="nav-img">
              <img src="img/booksmarks.svg" alt=""/>
            </div>
            <span>Saved</span>
          </NavLink>
          <NavLink to="/qr" className="nav-link">
            <div className="nav-img">
              <img src="img/controller.svg" alt=""/>
            </div>
            <span>Gaming</span>
          </NavLink>
          <NavLink to="/df" className="nav-link">
            <div className="nav-img">
              <img src="img/future.svg" alt=""/>
            </div>
            <span>Memories</span>
          </NavLink>
        </nav>

        <div className="aside-bottom">
          <NavLink to="" className="aside-bottom__item">
            <img src="img/help-web-button.svg" alt=""/>
            <span>Help & Support</span>
          </NavLink>

          <NavLink to="" className="aside-bottom__item">
            <img src="img/gear.svg" alt=""/>
            <span>Settings & Privacy</span>
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default SidePanel
