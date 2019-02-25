import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
    state = {
        trackName: ''
    }

    onChange (e) {
        this.setState({
            trackName : e.target.value
        })
    }

    searchTrack = (dispatch, e) => {
        e.preventDefault();
        axios
        .get(
            `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackName}&page_size=10&page=1&s_track_rating=desc&apikey=2e4b26ab30ca98377d9c0d61e50e11fa`
        )
        .then(res => {
            //console.log(res.data);
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
            //console.log('before', this.state);
            this.setState({ trackName: '' });
            //console.log('after', this.state);

        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <Consumer>
                {value => {
                    //console.log('Check Dispatch', value);
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="text-center display-4">
                                <FontAwesomeIcon icon={faMusic} /> Search For a Song
                            </h1>
                            <p className="lead text-center">Get Lyrics for the songs you want..</p>   
                            <form onSubmit={this.searchTrack.bind( this, dispatch )}>
                                <div className = "form-group">
                                    <input type = "text"
                                    className = "form-control form-control-lg"
                                    name = "trackName"
                                    value = {this.setState.trackName}
                                    onChange = {this.onChange.bind(this)}
                                    />
                                </div>
                                <button className="btn btn-danger btn-lg btn-block mb-5"
                                type="submit"> Get Lyrics
                                </button>
                            </form>
                            
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search;

