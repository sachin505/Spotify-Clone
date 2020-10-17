import React from 'react'
import './Footer.css'
import PlayerCicleOutlineIcon from "@material-ui/icons/PlayCircleOutlineRounded"
import SkipPerviousIcon from "@material-ui/icons/SkipPrevious"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from "@material-ui/core"
import PlayListIcon from "@material-ui/icons/PlaylistAdd"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import { useDataLayerValue } from './DataLayer'

const Footer = () => {
    const [{ user, discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="Footer">
            <img />
            <div className="Footer__left">

                <div className="Footer__songInfo">

                    <h4>Yeah !</h4>
                    <p>Usher</p>

                </div>
            </div>
            <div className="Footer__center">
                <ShuffleIcon className="Footer__green" />
                <SkipPerviousIcon className="Footer__Icon" />
                <PlayerCicleOutlineIcon fontSize="large" className="Footer__Icon" />
                <SkipNextIcon className="Footer__Icon" />
                <RepeatIcon className="Footer__green" />
            </div>
            <div className="Footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlayListIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Footer;