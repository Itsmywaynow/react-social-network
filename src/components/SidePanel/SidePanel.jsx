import React from 'react'
import { NavLink } from 'react-router-dom'
import { GamepadIcon, HelpIcon, HomeIcon, MarkerIcon, MemoriesIcon, SearchIcon, SettingsIcon } from '../common/SvgIcons'
import './SidePanel.css'


const SidePanel = () => {
  return (
    <aside className="aside-panel">
      <div className="aside-top">
        <div className="input-group aside-input-group">
          <input className="input-search" type="text" placeholder="Search"/>
          <SearchIcon classes="search-icon icon"/>
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

      <div className="aside-body">
        <nav className="nav">
          <NavLink to="/feed" className="nav-link">
              <div className="nav-img">
                <HomeIcon/>
              </div>
            <span>New Feed</span>
          </NavLink>
          <NavLink to="/fadf" className="nav-link">
            <div className="nav-img">
              <MarkerIcon/>
            </div>
            <span>Saved</span>
          </NavLink>
          <NavLink to="/qr" className="nav-link">
            <div className="nav-img">
              <GamepadIcon/>
            </div>
            <span>Gaming</span>
          </NavLink>
          <NavLink to="/df" className="nav-link">
            <div className="nav-img">
              <MemoriesIcon/>
            </div>
            <span>Memories</span>
          </NavLink>
        </nav>

        <div className="aside-bottom">
          <NavLink to="" className="aside-bottom__item">
            <HelpIcon/>
            <span>Help & Support</span>
          </NavLink>

          <NavLink to="" className="aside-bottom__item">
            <SettingsIcon/>
            <span>Settings & Privacy</span>
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default SidePanel
