import React from "react"
import './SidebarItem.css'

const SidebarItem = ({active, Icon, data}) => {
    return (
        <div class={`sidebarItem ${active && 'page--active'}`}>
            <Icon className='icon'/>
            <h2>{data}</h2>
        </div>
    );
}

export default SidebarItem;
