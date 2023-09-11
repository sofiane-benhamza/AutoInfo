import { useState, lazy } from 'react';
import DropDown from './comps/DropDown';
import GetCars from './comps/GetCars';
import Navbar from './comps/Navbar';
import Main from './comps/Main';
import 'bootstrap/dist/css/bootstrap.css';
import { useSpring, animated } from '@react-spring/web';
import * as Icon from 'react-bootstrap-icons';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='browse-cars' element={<Main />} />
          <Route path='saved-cars' element={<Main />} />
        </Routes>
      </Router>
    </>

  );
}



export default App