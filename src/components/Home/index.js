import React, { Component } from 'react';
import axios from 'axios';

import Banner from './banner';
import ArtistsList from './artistsList';

const URL_ARTISTS = 'https://fakeartistdb.herokuapp.com/artists';

class Home extends Component {

  state = {
    artists:[]
  }

  componentDidMount() {
    axios.get(URL_ARTISTS)
         .then( response => {
            this.setState({ artists: response.data });
         })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Banner />
        <ArtistsList allArtists={this.state.artists} />
      </>
    );
  }
}

export default Home;