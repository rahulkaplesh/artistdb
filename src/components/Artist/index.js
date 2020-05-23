import React, { Component } from 'react';
import axios from 'axios';

import AlbumList from'./albumList';

const REQ_URL = "https://fakeartistdb.herokuapp.com/artists";

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist : {}
    }
    this.getArtistData();
  }

  getArtistData = () => {
    axios.get(`${REQ_URL}/${this.props.match.params.artistId}`)
    .then( response=>{
      this.setState({artist: response.data});
    }).catch( error=>{
      this.props.history.push('/home');
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.artistId !== this.props.match.params.artistId) {
      this.getArtistData();
    }
  }

  render() {
    return (
      <>
        <div className="artist_bio">
          <div className="avatar">
            <span style={{
              background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`
            }}>
            </span>
          </div>
          <div className="bio">
            <h3>{ this.state.artist.name }</h3>
            <div className="bio_text">
              { this.state.artist.bio }
            </div>
            <AlbumList albumList={this.state.artist.albums}/>
          </div>
        </div>
      </>
    )
  }
}

export default Artists;