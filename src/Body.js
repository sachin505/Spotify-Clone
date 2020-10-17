import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledRounded'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'
const Body = ({ spotify }) => {
    const [{ user, discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="Body">
            <Header spotify={spotify}></Header>
            <div className="Body__Info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="Body__InfoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover_Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="Body__songs">
                <div className="Body__Icons">
                    <PlayCircleFilledIcon className="Body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}

            </div>
        </div>
    )
}

export default Body;