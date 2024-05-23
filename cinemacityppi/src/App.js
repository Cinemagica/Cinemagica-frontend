import React from 'react';
import Navbar from './components/Navbar';
import FilmSlider from './components/FilmSlider';
import FilmRecommender from "./components/FileRecommender";
import Footer from './components/Footer';
import MovieSlider from "./components/MovieSlider";
import ProgramSelection from "./components/ProgramSelection";
import MovieCard from "./components/MovieCard";
import Offers from "./components/Offers";
import Menu  from "./components/Menu";
import Reservation from "./components/Reservation";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const routerPaths = [

    {
        path: "/", element: [<Navbar />, <FilmSlider />,  <FilmRecommender />, <Footer />]

    },
    {
        path: "/movies", element: [<Navbar />, <MovieSlider/>, <Footer />]

    },
    {
        path: "/program", element:  [<Navbar />, <ProgramSelection/>, <Footer />]

    },
    {
        path: "/program/reservation", element:  [<Navbar />,<Reservation/> , <Footer />]

    },
    {
        path: "/offers", element:  [<Navbar />, <Offers/>, <Footer />]

    },
    {
        path: "/menu", element:  [<Navbar />, <Menu/>, <Footer />]

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