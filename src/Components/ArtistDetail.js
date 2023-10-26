import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

function ArtistDetail() {
  const { artistSlug } = useParams();
  const [artist, setArtist] = useState({});
  const [gigData, setGigData] = useState(null);

  useEffect(() => {
  axios
    .get(`https://hiddenmantra.co.uk/wp-json/wp/v2/artists?slug=${artistSlug}`)
    .then((response) => {
      // Assuming the response is an array with one artist
      const singleArtist = response.data[0];
      setArtist(singleArtist);
    })
    .catch((error) => {
      console.error('Error fetching artist content:', error);
    });

  // Make an API request to Skiddle to fetch gig information
  axios
    .get('https://www.skiddle.com/api/v1/events/36531373/?api_key=6b0515ae0c2fcef0d9f0997a4a879ae5')
    .then((response) => {
      setGigData(response.data);
      console.log('Gig Data:', response.data); // Add this console.log statement
	  console.log('Event Name:', gigData.eventname);
console.log('Event Date:', gigData.date);
    })
    .catch((error) => {
      console.error('Error fetching gig data:', error);
    });
}, [artistSlug]);

  return (
    <div className="container">
      <h2>{artist.title?.rendered}</h2>
      <div className="row">
        <div className="col-md-12">
          <div
            dangerouslySetInnerHTML={{
              __html: artist.acf && artist.acf.youtube_embed_code ? artist.acf.youtube_embed_code : '',
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div dangerouslySetInnerHTML={{ __html: artist.content?.rendered }}></div>
        </div>
        <div className="col-md-4">
          {artist && (
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: artist.acf && artist.acf.bandcamp_embed_code ? artist.acf.bandcamp_embed_code : '',
                }}
              />
			  <h3>Press</h3>
<h3>Live Dates</h3>
{gigData && (
  <div>
    <p>
	<h5>{gigData.results.date.split('-').reverse().join('/')}</h5>
      <a href={gigData.results.link} target="_blank" rel="noopener noreferrer">{gigData.results.eventname}</a>
    </p>

    {/* Add more gig details as needed */}
  </div>
)}
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtistDetail;