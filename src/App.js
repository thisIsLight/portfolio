
import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Explore from './pages/explore/explore';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

function App() {

  useEffect(() => {
    document.title = "Sahil Kumar Rao";
  }, []);

  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
              <Route path="/portfolio" element={<Home />} />
              <Route path="/portfolio/explore" element={<Explore />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );

}

export default App;
