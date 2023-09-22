/* eslint-disable no-unused-vars */
import './style.css'
import React from 'react'
import TwitterIcon from './Icons/TwitterIcon';
import HomeIcon from './Icons/HomeIcon';
import searchIcon from './Icons/searchIcon';
import SidebarItem from './SidebarItem';
import bellIcon from './Icons/bellIcon';
import messageIcon from './Icons/messageIcon';
import listIcon from './Icons/listIcon';
import bookmarkIcon from './Icons/bookmarkIcon';
import communitiesIcon from './Icons/communitiesIcon';
import XIcon from './Icons/XIcon';
import userIcon from './Icons/profileIcon';
import moreIcon from './Icons/moreIcon';
import TweetButton from './Icons/TweetButton';

import '../../App.css'

const SideBar = () => {
    return (
        <nav class='Sidebar'>
            {/** Twitter icon */}
            <div class='twitter-icon'>
                <TwitterIcon class='icon'/>
            </div>

            {/** Twitter navigation => <SidebarOption change just data and icon /> */}
            <div class='navigation-wrapper'>
                <SidebarItem active Icon={HomeIcon} data='Home'/>
                <SidebarItem Icon={searchIcon} data='Explore'/>
                <SidebarItem Icon={bellIcon} data='Notifications'/>
                <SidebarItem Icon={messageIcon} data='Messages'/>
                <SidebarItem Icon={listIcon} data='Lists'/>
                <SidebarItem Icon={bookmarkIcon} data='Bookmarks'/>
                <SidebarItem Icon={communitiesIcon} data='Communities'/>
                <SidebarItem Icon={XIcon} data='Verified'/>
                <SidebarItem Icon={userIcon} data='Profile'/>
                <SidebarItem Icon={moreIcon} data='More'/>
            </div>

            {/** Tweet button */}
            <TweetButton />

            {/** Profile */}
           
        </nav> 
    );
}

export default SideBar;