import React from 'react';
import {FcHome} from 'react-icons/fc';
import {GrNotification} from 'react-icons/gr';
import {HiHashtag} from 'react-icons/hi';
import {RiMessage2Line} from 'react-icons/ri';
import {CgMoreO} from 'react-icons/cg';
import {CgProfile} from 'react-icons/cg';
import {IoLogoTwitter} from 'react-icons/io';

import {BsFillBookmarkFill} from 'react-icons/bs'
import {TiThListOutline} from 'react-icons/ti'


function Sidebar() {
    return (
        <div className="icons">
            <IoLogoTwitter />
            <ul className="sidebar-list">
                <li><h3><FcHome />Home</h3></li>
                <li><h3><HiHashtag />Explore</h3></li>
                <li><h3><GrNotification />Notifications</h3></li>
                <li><h3><RiMessage2Line />Messages</h3></li>

                <li><h3><BsFillBookmarkFill />Bookmark</h3></li>
                <li><h3><TiThListOutline />Lists</h3></li>
                <li><h3><CgProfile />Profile</h3></li>
                <li><h3><CgMoreO /> More</h3></li>


                <li><h3><CgProfile />Profile</h3></li>
                <li><h3><CgMoreO /> More...</h3></li>

            </ul>
            <button className="tweet-btn">Chiu Chiu Tweet</button> 

            
        </div>
    );
}

export default Sidebar;
