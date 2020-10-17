import React from 'react'
import './SideBarOptions.css'
const SideBarOptions = ({ title, Icon }) => {
    return (
        <div className="SideBarOptions">
            {Icon && <Icon className="SideBarOptions__icons" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}

        </div>
    )
}
export default SideBarOptions;