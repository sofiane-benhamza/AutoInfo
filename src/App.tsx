import Navbar from './comps/Navbar';
import Main from './comps/Main';
import 'bootstrap/dist/css/bootstrap.css';
import * as Icon from 'react-bootstrap-icons';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import SavedCars from './comps/SavedCars';
import { useEffect, useState } from 'react';


function App() {

  const [savedCars, setSavedCars] = useState([]);

  // Load saved cars from localStorage on component mount
  useEffect(() => {
    const savedCarsDataString = localStorage.getItem('savedCars');

    if (savedCarsDataString !== null) {
      const savedCarsData = JSON.parse(savedCarsDataString);
      setSavedCars(savedCarsData);
    } else {
      // Handle the case where 'savedCarsDataString' is null
      // For example, you might set an empty array as a default value:
      setSavedCars([]);
    }
  }, []);

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='saved-cars' element={<SavedCars />} />
        </Routes>
      </Router>
    </>

  );
}

//                   



export default App