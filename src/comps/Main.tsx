import { useState, lazy } from 'react';
import DropDown from './DropDown';
import GetCars from './GetCars';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';

const cars = ["Buick", "MINI", "Volvo", "Ford", "HUMMER", "GMC", "Subaru", "Mitsubishi", "Dodge", "Nissan", "Honda", "Lincoln", "Hyundai", "BMW", "Bentley", "Lexus", "Chevrolet", "Jaguar", "Mercedes-Benz", "Volkswagen", "Aston Martin", "Land Rover", "Pontiac", "Cadillac", "FIAT", "Saab", "Kia", "Lamborghini", "Audi", "Jeep", "MAZDA", "Suzuki", "Toyota", "Acura", "Saturn", "Chrysler", "Isuzu", "Ferrari", "Tesla", "INFINITI", "Oldsmobile", "Ram", "Eagle", "Porsche", "Mercury", "Scion", "Lotus", "Plymouth", "Freightliner", "Rolls-Royce", "SRT", "Maybach", "Alfa Romeo", "Geo", "smart", "Daewoo", "Maserati", "Daihatsu", "Genesis", "McLaren", "Fisker", "Panoz"];
const types = ["SUV", "Convertible", "Pickup", "Van/Minivan", "Wagon", "Sedan", "Coupe", "Hatchback"];
const years = ["1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];


function Main() {
    // vars 
    const [selectedCar, setSelectedCar] = useState('');

    const [selectedType, setSelectedType] = useState('');

    const [selectedYear, setSelectedYear] = useState('');

    const [seeDetails, setSeeDetails] = useState('');

    const [updater, setUpdater] = useState(0);

    const chooseCar = (item: string) => { setSelectedCar(item); };
    const chooseType = (item: string) => { setSelectedType(item); };
    const chooseYear = (item: string) => { setSelectedYear(item); };

    return (

        <>
            <div className='centered min-vh-100 bg-black'>
                <br />
                <div className='rounded py-2 border-light border container bg-black d-flex justify-content-around'>
                    <br />
                    <DropDown items={cars} title="maker" select={chooseCar} />
                    <DropDown items={types} title="type" select={chooseType} />
                    <DropDown items={years} title="year" select={chooseYear} />
                    <button className='btn btn-primary' onClick={() => { setUpdater(updater + 1); }}>search</button>
                </div>
                <br />
                <br />
                <div className='container d-flex gap-1 flex-wrap justify-content-around'>
                    <GetCars key={updater} make={selectedCar} type={selectedType} year={selectedYear} />
                </div>
            </div>
        </>

    );
}



export default Main;