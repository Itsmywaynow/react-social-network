import React from 'react'
import { AddIcon, CatIcon, MoreOptionsIcon, PhotoIcon, PostIcon, TagsIcon } from '../common/SvgIcons'
import './Feed.css'
import Post from './Post/Post'

const Feed = ({stories, posts}) => {
  const storiesElements = stories.map(story => {
    return (
      <li key={story.id} className={`stories__item ${story.isChecked ? '' : 'story--active'}`}>
        <img src={story.videoUrl} alt=""/>
        <span>{story.userName}</span>
      </li>
    )
  })

  const postsElements = posts.map(post => {
    return (
      <Post id={post.id} 
            postText={post.postText} 
            tags={post.tags}
            isLiked={post.isLiked}
            backgroundImg={post.backgroundImg}
            />
    )
  })
  
  return (
    <div>
      <ul className="stories content-stories">
        <li className="stories__item add-stories">
          <AddIcon/>
        </li>
        {storiesElements}
      </ul>

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
        {postsElements}
      </div>
    </div>
  )
}

export default Feed
