import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SinglePage({ match }) {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    // Get the page slug from the URL params
    const { slug } = match.params;

    // Make an API request to fetch the content of the single page
    axios
      .get(`https://hiddenmantra.co.uk/wp-json/wp/v2/pages?slug=${slug}`)
      .then((response) => {
        // Assuming that the response data is an array with one page
        const page = response.data[0];

        // Set the page content
        setPageContent(page.content.rendered);
      })
      .catch((error) => {
        console.error('Error fetching page content:', error);
      });
  }, [match.params]);

  return (
    <div>
      {/* Render the page content using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>
    </div>
  );
}

export default SinglePage;