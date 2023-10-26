import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function NewsDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://hiddenmantra.co.uk/wp-json/wp/v2/posts/?slug=${slug}`)
      .then((response) => {
        const singlePost = response.data[0];
        setPost(singlePost);
      })
      .catch((error) => {
        console.error('Error fetching news post content:', error);
      });
  }, [slug]);

  // Function to decode HTML entities
  const decodeHTMLEntities = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div>
      <div className="container fade-in">
        <div className="row">
          <div className="col-md-6 mx-auto">
            {/* Check if post.title is available before rendering */}
            {post.title && (
              <>
                {/* Apply a fade-in animation */}
                <h1 className="fade-in text-center">{decodeHTMLEntities(post.title?.rendered)}</h1>
                <div className="fade-in" dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(post.content?.rendered) }}></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;