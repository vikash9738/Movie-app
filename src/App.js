import './App.css';
import Navbar from './Components/Navbar.js';
import Banner from './Components/Banner.js';
import Movies from './Components/Movies.js';
import Favourite from './Components/Favourite.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Banner />
              <Movies />
            </>
          )}
        />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </Router>
  );
}

export default App;
