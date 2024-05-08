import React from 'react';
import Navbar from './components/Navbar';
import FilmSlider from './components/FilmSlider';
import FilmRecommender from "./components/FileRecommender";
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
            <Navbar />
        {/* Other components go here */}
          <FilmSlider />
          <FilmRecommender />
          <Footer />
      </div>
  );
}

export default App;