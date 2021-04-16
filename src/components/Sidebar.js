import React from 'react';
import {FcHome} from 'react-icons/fc';
import {GrNotification} from 'react-icons/gr';
import {HiHashtag} from 'react-icons/hi';
import {RiMessage2Line} from 'react-icons/ri';
import {CgMoreO} from 'react-icons/cg';
import {CgProfile} from 'react-icons/cg';
import {IoLogoTwitter} from 'react-icons/io';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {TiThListOutline} from 'react-icons/ti';
import SidebarOptions from './SidebarOptions';
import "./Sidebar.css"


function Sidebar() {
    return (
        <div className="sidebar">
            <IoLogoTwitter className="sidebar__twitterIcon" />
            
                <SidebarOptions className="sidebar-icons" Icon={FcHome} text="Home" />
                <SidebarOptions Icon={HiHashtag} text="Explore" />
                <SidebarOptions Icon={GrNotification} text="Notifications" />
                <SidebarOptions Icon={RiMessage2Line} text="Messages" />
                <SidebarOptions Icon={BsFillBookmarkFill} text="Bookmark" />
                <SidebarOptions Icon={TiThListOutline} text="Lists" />
                <SidebarOptions Icon={CgProfile}text="Profile" />
                <SidebarOptions Icon={CgMoreO} text="More" />

            <button className="sidebar__tweet">Tweet</button> 

            
        </div>
    );
}

export default Sidebar;
