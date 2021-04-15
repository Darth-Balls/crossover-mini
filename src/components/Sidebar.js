import React from 'react'
import {FcHome} from 'react-icons/fc'
import {GrNotification} from 'react-icons/gr'
import {HiHashtag} from 'react-icons/hi'

function Sidebar() {
    return (
        <div className="icons">
            <ul>
                <li><h3><FcHome />Home</h3></li>
                <li><h3><HiHashtag />Give more time</h3></li>
                <li><h3><GrNotification />Notifications</h3></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            
        </div>
    );
}

export default Sidebar;
