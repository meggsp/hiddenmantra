import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Artists from './Artists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import MailchimpSignup from './MailchimpSignup';

function Home() {
  const [pageContent, setPageContent] = useState('');
  const [skiddleData, setSkiddleData] = useState(null); // Initialize as null

  useEffect(() => {
    // Make the API request to fetch the content of the homepage from WordPress
    axios
      .get('https://hiddenmantra.co.uk/wp-json/wp/v2/pages?slug=home2')
      .then((response) => {
        // Assuming that the response data is an array with one page
        const page = response.data[0];

        // Set the page content
        setPageContent(page.content.rendered);
      })
      .catch((error) => {
        console.error('Error fetching page content:', error);
      });

    // Make the API request to fetch data from the Skiddle API
    const skiddleApiUrl =
      'https://www.skiddle.com/api/v1/events/36531373/?api_key=6b0515ae0c2fcef0d9f0997a4a879ae5';

    axios
      .get(skiddleApiUrl)
      .then((response) => {
        const skiddleEventData = response.data.results;

        // Set the Skiddle event data in state
        setSkiddleData(skiddleEventData);
      })
      .catch((error) => {
        console.error('Error fetching Skiddle data:', error);
      });
  }, []);

  return (
  <div id="home">
    <div className="text-center text-light">
	<div className="row pt-3 pb-3">
	<div className="col-md-6"><a href="https://kendonagasaki.bandcamp.com/album/hurt-decide-conspire"><img src="https://hiddenmantra.co.uk/wp-content/uploads/2023/04/cd-front-1024x1012.jpg" className="kendo" alt="Kendo Nagasaki"></img></a></div>
	<div className="col-md-6 my-auto"><a href="https://kendonagasaki.bandcamp.com/album/hurt-decide-conspire"><h1>KENDO NAGASAKI</h1><h3>HURT, DECIDE, CONSPIRE</h3><h3>SOLD OUT</h3></a></div>
	</div>
	<div className="row pt-3 pb-3">
	<h3>Live Dates</h3>
	<div className="col-md-6"><h3><a href="https://allevents.in/marston%20green/the-telescopes-yuko-araki-kendo-nagasaki-in-birmingham/200024947106749">Friday, November 17th @ Centrala, Birmingham. Tickets here.</a></h3>
	<h3><a href="https://www.skiddle.com/whats-on/Birmingham/Centrala/Manu-Louis--By-Bizarre-Hands--ZD-Grafters/36531373/?sktag=14917">Tuesday 14th November, Centrala in Birmingham. Tickets here.</a></h3></div>
	<div className="col-md-6"><h3><a href="https://www.bbc.co.uk/sounds/play/m001qcx7">6Music Riley & Coe Session</a></h3></div>
	</div>
	<div className="row pt-3 pb-3">
	<div className="col-md-12">
	<iframe width="100%" height="315" src="https://www.youtube.com/embed/HTsLLTjb0mI?si=7ZF00pFp2iT0PqGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</div>
	</div>
	
	<div className="row pt-3 pb-3">
	<div className="col-md-12">
	<Artists />
	</div>
	</div>
	
	
	
	<div className="row pt-5 pb-5">
	<div className="col-md-6">
	
	<a href="https://www.facebook.com/hiddenmantrarecs"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
		<a href="https://www.instagram.com/hidden_mantra/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
		<a href="mailto:meggsp@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
		<a href="https://hiddenmantra.bandcamp.com/"><FontAwesomeIcon icon={faBandcamp} size="2x" /></a>

	  
	  </div>
	  <div className="col-md-6">
	  <MailchimpSignup />
</div>
</div>
	
      

      {/* Render the WordPress content */}
      <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>
    </div>
	</div>
  );
}

export default Home;
