import React from 'react';
import Navbar from './components/Navbar';
import FilmSlider from './components/FilmSlider';
import FilmRecommender from "./components/FileRecommender";
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const routerPaths = [

    {
        path: "/", element: [<Navbar />, <FilmSlider />,  <FilmRecommender />, <Footer />]

    },
    {
        path: "/movies", element: [<Navbar />, <Footer />]

    },
    {
        path: "/program", element:  <FilmSlider />

    }
]

const router = createBrowserRouter(routerPaths);


function App() {
  return (

      <div className="App">
          <RouterProvider router={router}>
          </RouterProvider>
      </div>

  );
}

export default App;