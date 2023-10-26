// Header.js
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logoImage from './logo3-150x150.png'; // Adjust the path to your image

function Header() {
  return (
  
  <div>
  <title>Hidden Mantra Records</title>
    <header className="text-center pt-3 pb-3">	
	<Link to="/"><img src={logoImage} alt="Hidden Mantra Records" className="logo" /></Link>
      <nav id="header">
        <ul>
		  <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="https://hiddenmantra.bandcamp.com/music">Shop</Link>
          </li>
        </ul>
      </nav>
    </header>
	</div>
  );
}

export default Header;