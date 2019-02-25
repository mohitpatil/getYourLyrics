import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Song from './Song';

const Tracks = () => {
    return (
        <Consumer>
            { value => {
                console.log(value);  
                const { track_list,heading } = value;

                if(track_list.length === 0 || track_list === undefined) {
                    return <Spinner />
                } else {
                    return (
                        <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>
                            <div className="row">
                                {track_list.map(item => (
                                    <Song key={item.track.track_id} track={item.track}/>
                                ))}
                            </div>
                        </React.Fragment>
                    )
                }
            }}
        </Consumer>
    )
}

export default Tracks;