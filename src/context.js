import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'SEARCH_TRACKS':
            return {
                ...state,
                track_list: action.payload,
                heading: 'Search Results'
            };
        defualt:
            return state;
    }
}

export class Provider extends Component {
    state = {
        track_list : [
        
        ],
        heading: "Top 10 Searched Songs..",
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=2e4b26ab30ca98377d9c0d61e50e11fa`
          )
          .then(res => {
            //console.log(res.data);
            this.setState({ track_list : res.data.message.body.track_list });
        })
          .catch(err => console.log(err));
      }

    render() {
        return(
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;