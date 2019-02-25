import React from 'react';
import  { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPlay, faSnowman, faCompactDisc, faEye } from "@fortawesome/free-solid-svg-icons";


const Song = (props) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm" style={{ minHeight: '200px' }}>
                <div className="card-body">
                    <p className="card-text">
                        <strong><FontAwesomeIcon icon={faPlay}/> Song name:</strong>:{props.track.track_name}
                        <br/>
                        <strong><FontAwesomeIcon icon={faSnowman}/> Artist Name : {props.track.artist_name}</strong>
                        <br/>
                        <strong><FontAwesomeIcon icon={faCompactDisc}/> Album Name : {props.track.album_name}</strong>
                        <br/>
                    </p>
                    <Link to={`lyrics/track/${props.track.track_id}`} className="btn btn-danger btn-block">
                        <FontAwesomeIcon icon={faEye}/> View Lyrics
                    </Link>
                </div>        
            </div>
        </div>
    )
}

export default Song;
