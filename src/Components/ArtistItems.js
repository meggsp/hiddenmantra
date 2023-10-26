import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
const { title, excerpt, id } = this.props.artist;
    const { imgUrl } = this.state;

return (
  <div className="col-sm-12 col-md-4 col-lg-3 pt-3 pb-3">
    {/* Link to the artist's detail page */}
<Link to={`/artists/${this.props.artist.slug}`}>
  {/* Check if imgUrl is not empty before rendering the image */}
  {imgUrl && (
    <img src={imgUrl} alt={title.rendered} className="artistImg" />
  )}
</Link>
  </div>
);
  }
}

// Define the PropTypes to validate the 'artist' prop
ArtistItems.propTypes = {
  artist: PropTypes.object.isRequired, // Ensure 'artist' prop is required and an object
};

export default ArtistItems;






