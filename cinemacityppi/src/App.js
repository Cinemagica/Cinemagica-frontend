import React from 'react';
import Navbar from './components/Navbar';
import FilmSlider from './components/FilmSlider';

function App() {
  return (
      <div className="App">
        <Navbar />
        {/* Other components go here */}
          <FilmSlider />
      </div>
  );
}

export default App;