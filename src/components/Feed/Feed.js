import React from 'react'
import './style.css'
import PostBox from './PostBox'

function Feed() {
  return (
    <div className='feed'>
      {/** Header */}
      <div class='feed__header'>
        <h2>Home</h2>
      </div>
       <div class='pages'>
            <div class='left'>
                <h1>For you</h1>
                <div class='line'></div>
            </div>
            <div class='right'>
                <h1>Following</h1>
                <div class='line'></div>
            </div>
        </div>
      
      
      {/** PostBox */}
      <PostBox />
      {/** FeedPost */}
    </div>
  )
}

export default Feed
