import React, { Component } from 'react';
import axios from 'axios';
import ArtistItems from './ArtistItems';

export class Artists extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
axios
  .get('https://hiddenmantra.co.uk/wp-json/wp/v2/artists')
  .then((res) =>
    this.setState({
      artists: res.data.map((artist) => ({
        ...artist,
        slug: artist.slug, // Include the 'slug' property
      })),
    })
  )
  .catch((err) => console.log(err));
  }

  render() {
    const { artists } = this.state;
    return (
	<div className="container fade-in">
	<div className="row">
       {artists.map((artist) => (
  <ArtistItems key={artist.id} artist={artist} />
))}
		</div>
	</div>
    );
  }
}

export default Artists;
