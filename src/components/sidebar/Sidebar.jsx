import React from 'react'
import "./sidebar.css"
import { Home, People, Article, AttachMoney } from '@mui/icons-material'

export default function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <People className="sidebarIcon" />
                            Students
                        </li>
                        <li className="sidebarListItem">
                            <Article className="sidebarIcon" />
                            Report Card
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Fee
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
