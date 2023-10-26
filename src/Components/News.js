import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';

function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://hiddenmantra.co.uk/wp-json/wp/v2/posts')
      .then((response) => {
        // Iterate through the response data and decode HTML entities
        const decodedPosts = response.data.map((post) => ({
          ...post,
          title: { rendered: decodeHTMLEntities(post.title.rendered) },
          content: { rendered: decodeHTMLEntities(post.content.rendered) },
        }));

        setPosts(decodedPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // Function to decode HTML entities
  const decodeHTMLEntities = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1 className="text-center">News</h1>
          <ul id="news">
			{posts.map((post) => (
				<li className="pt-5 pb-5" key={post.id}>
				<h2>
					<Link to={`/news/${post.slug}`}>{post.title.rendered}</Link>
				</h2>
				{/* Use dangerouslySetInnerHTML to render the content */}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      <Link to={`/news/${post.slug}`}>Read More</Link>
    </li>
  ))}
</ul>
        </div>
      </div>
    </div>
  );
}

export default News;