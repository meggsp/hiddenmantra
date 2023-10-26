import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class ArtistItems extends Component {
  state = {
    imgUrl: '',
  };

  static propTypes = {
    artist: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { featured_media } = this.props.artist;

    // Use the correct media endpoint
    axios
      .get(`https://hiddenmantra.co.uk/wp-json/wp/v2/media/${featured_media}`)
      .then((res) => {
        console.log(res);
        this.setState({
          imgUrl: res.data.media_details.sizes.full.source_url,
        });
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }

  render() {
    const { title, excerpt } = this.props.artist;
    const { imgUrl } = this.state;
    
    return (
      <div className="col-3">
	    {/* <h2>{title.rendered}</h2> */}
        {/* Check if imgUrl is not empty before rendering the image */}
        {imgUrl && <img src={imgUrl} alt={title.rendered} className="artistImg" />}
        <br />
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
      </div>
    );
  }
}

export default ArtistItems;
