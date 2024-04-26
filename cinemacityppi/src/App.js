import React from 'react';
import Navbar from './components/Navbar';
import FilmSlider from './components/FilmSlider';
import FilmRecommender from "./components/FileRecommender";

function App() {
  return (
      <div className="App">
            <Navbar />
        {/* Other components go here */}
          <FilmSlider />
          <FilmRecommender />
      </div>
  );
}

export default App;