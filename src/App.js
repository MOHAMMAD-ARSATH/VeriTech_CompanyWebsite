import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/About';
import OurTeam from './components/Team';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <CustomNavbar />
      <div id="home">
         <Home />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="team">
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default App;