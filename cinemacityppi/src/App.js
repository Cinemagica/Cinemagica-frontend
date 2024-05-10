import React from 'react';
import Navbar from './components/Navbar';
import FilmSlider from './components/FilmSlider';
import FilmRecommender from "./components/FileRecommender";
import Footer from './components/Footer';
import MovieSlider from "./components/MovieSlider";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const routerPaths = [

    {
        path: "/", element: [<Navbar />, <FilmSlider />,  <FilmRecommender />, <Footer />]

    },
    {
        path: "/movies", element: [<Navbar />, <MovieSlider/>, <Footer />]

    },
    {
        path: "/program", element:  [<Navbar />, <Footer />]

    },
    {
        path: "/offers", element:  [<Navbar />, <Footer />]

    },
    {
        path: "/menu", element:  [<Navbar />, <Footer />]

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