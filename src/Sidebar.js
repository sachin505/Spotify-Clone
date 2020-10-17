import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import SideBarOptions from './SideBarOptions'
import { useDataLayerValue } from './DataLayer'

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className='Sidebar'>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className="Sidebar__logo" />
            <SideBarOptions title="Home" Icon={HomeIcon} />
            <SideBarOptions title="Search" Icon={SearchIcon} />
            <SideBarOptions title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="Sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SideBarOptions title={playlist.name} />
            ))}

            <SideBarOptions title="Rock" />
            <SideBarOptions title="rnb" />
        </div>
    )
}

export default Sidebar