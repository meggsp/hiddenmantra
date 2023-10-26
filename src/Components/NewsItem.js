import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://hiddenmantra.co.uk/wp-json/wp/v2/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog post:', error);
      });
  }, [postId]);

  return (
    <div>
      <h2>{post.title?.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }}></div>
    </div>
  );
}

export default BlogPost;
