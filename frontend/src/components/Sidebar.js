import React from "react";

export default function Sidebar(){
    return (
    <div className="siderbar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidbarTitle">Home</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        Recommend
                    </li>
                    <li className="sidebarListItem">
                        Conjestion
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}