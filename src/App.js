import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import News from './Components/News';
import NewsDetail from './Components/NewsDetail';
import Artists from './Components/Artists';
import ArtistDetail from './Components/ArtistDetail'; // Make sure the import is correct
import Shop from './Components/Shop';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:artistSlug" element={<ArtistDetail />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;