import React from 'react'
import "./SongRow.css"
const SongRow = ({ track }) => {
    return (
        <div className="SongRow">
            <img className="SongRow__Album" src={track.album.images[0].url} alt="" />
            <div className="SongRow__Info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(",")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}
export default SongRow