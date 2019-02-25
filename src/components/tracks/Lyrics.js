import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

class Lyrics extends Component {

    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=2e4b26ab30ca98377d9c0d61e50e11fa`
        )
        .then(res => {
            this.setState({ lyrics : res.data.message.body.lyrics });
            console.log(res.data);
            return axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=2e4b26ab30ca98377d9c0d61e50e11fa`
            )
            .then(res => {
                
                this.setState({ track : res.data.message.body.track });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }

    render () {
        if (Object.keys(this.state.track).length === 0 
        || Object.keys(this.state.lyrics).length === 0 
        || this.state.track === undefined  
        || this.state.lyrics === undefined ) {
            return <Spinner />
        } else {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-4"><FontAwesomeIcon icon={faEyeSlash}/> Go Back to Search</Link> 
                    <div className="card">
                        <h5 className="card-header">
                            {this.state.track.track_name} by {' '}
                            <span className="text-secondary">{this.state.track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">{this.state.lyrics.lyrics_body}</p> 
                        </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID: </strong>: {this.state.track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Album Genre: </strong>: {this.state.track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Last Updated Time: </strong>: <Moment format="MM-DD-YYYY">{this.state.lyrics.updated_time}</Moment>
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit Words? </strong>: {this.state.track.explicit === 0 ? 'No' : 'Yes' }
                        </li>
                    </ul>

                    <br />
                    <br />
                    <br />
                    <div className="btn btn-danger btn-block">{this.state.lyrics.lyrics_copyright}</div>
                </React.Fragment>
            )
        }
    }
}

export default Lyrics;