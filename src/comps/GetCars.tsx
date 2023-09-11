import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetLogo from './GetLogo';
import { useSpring, animated } from '@react-spring/web';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

interface Props {
    make: string;
    type: string;
    year: string;
}

function GetCars({ make, type, year }: Props) {
    const [posts, setPosts] = useState<any[]>([]);
    const [savedCars, setSavedCars] = useState<any[]>([]);

    // Load saved cars from localStorage on component mount
    useEffect(() => {
        const savedCarsData = JSON.parse(localStorage.getItem('savedCars') || '[]');
        setSavedCars(savedCarsData);
    }, []);

    // Function to save a car
    const saveCar = (car: any) => {
        // Check if the car is already saved by comparing IDs
        const isCarSaved = savedCars.some((savedCar) => savedCar.id === car.id);

        if (!isCarSaved) {
            // Add the car to the savedCars array
            const updatedSavedCars = [...savedCars, car];
            setSavedCars(updatedSavedCars);

            // Store the updated savedCars array in localStorage
            localStorage.setItem('savedCars', JSON.stringify(updatedSavedCars));
        }
    };

    useEffect(() => {
        axios.defaults.headers['X-RapidAPI-Key'] = '4162e2dfa3mshf0649fbee3b7ddcp12cf7fjsn70630caf6ddb';
        axios.defaults.headers['X-RapidAPI-Host'] = 'car-data.p.rapidapi.com';

        var URL = `https://car-data.p.rapidapi.com/cars?limit=40`;

        if (make.length > 0) URL += `&make=${make}`;
        if (type.length > 0) URL += `&type=${type}`;
        if (year.length > 0) URL += `&year=${year}`;

        axios
            .get(URL)
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });

    }, [make, type, year]);

    return (
        <>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div className="col-lg-2 col-md-3 col-sm-12 overflow-hidden" key={index}>
                        <div className="card text-center">
                            <div className="card-header border-primary border">{post.make}</div>
                            <div className="card-body bg-black text-light">
                                <h5 className="card-title">
                                    <GetLogo title={post.make.toLowerCase()} />
                                </h5>
                                <p className="card-text">
                                    model: <i>{post.model}</i>
                                    <br />
                                    class: <i>{post.type}</i>
                                    <br />
                                    year: <i>{post.year}</i>
                                    <br />
                                </p>
                            </div>
                            <span
                                className="card-footer bg-black text-muted "
                                onClick={() => {
                                    let car = {
                                        id: post.id,
                                        model: post.model,
                                        type: post.type,
                                        make: post.make,
                                        year: post.year,
                                    };
                                    saveCar(car);
                                    console.log(car);
                                }}
                            >
                                <i className="btn btn-primary text-light border border-light" >
                                    <Icon.BookmarkPlus /> Save Advert
                                </i>
                            </span>
                        </div>
                    </div>
                ))
            ) : null}
        </>
    );
}

export default GetCars;
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetLogo from './GetLogo';
import { useSpring, animated } from '@react-spring/web';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

interface Props {
    make: string;
    type: string;
    year: string;
    setCarDetailed: Function;
}

function GetCars({ make, type, year, setCarDetailed }: Props) {
    const [posts, setPosts] = useState<any[]>([]);
    const [savedCars, setSavedCars] = useState<any[]>([]);

    // Load saved cars from localStorage on component mount
    useEffect(() => {
        const savedCarsData = JSON.parse(localStorage.getItem('savedCars') || '[]');
        setSavedCars(savedCarsData);
    }, []);

    // Function to save a car
    const saveCar = (car: any) => {
        // Check if the car is already saved by comparing IDs
        const isCarSaved = savedCars.some((savedCar) => savedCar.id === car.id);

        if (!isCarSaved) {
            // Add the car to the savedCars array
            const updatedSavedCars = [...savedCars, car];
            setSavedCars(updatedSavedCars);

            // Store the updated savedCars array in localStorage
            localStorage.setItem('savedCars', JSON.stringify(updatedSavedCars));
        }
    };

    useEffect(() => {
        axios.defaults.headers['X-RapidAPI-Key'] = '4162e2dfa3mshf0649fbee3b7ddcp12cf7fjsn70630caf6ddb';
        axios.defaults.headers['X-RapidAPI-Host'] = 'car-data.p.rapidapi.com';

        var URL = `https://car-data.p.rapidapi.com/cars?limit=40`;

        if (make.length > 0) URL += `&make=${make}`;
        if (type.length > 0) URL += `&type=${type}`;
        if (year.length > 0) URL += `&year=${year}`;

        axios
            .get(URL)
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [make, type, year]);

    return (
        <>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div className="col-lg-2 col-md-3 col-sm-12 overflow-hidden" key={index}>
                        <div className="card text-center">
                            <div className="card-header border-primary border">{post.make}</div>
                            <div className="card-body bg-black text-light">
                                <h5 className="card-title">
                                    <GetLogo title={post.make.toLowerCase()} />
                                </h5>
                                <p className="card-text">
                                    model: <i>{post.model}</i>
                                    <br />
                                    class: <i>{post.type}</i>
                                    <br />
                                    year: <i>{post.year}</i>
                                    <br />
                                </p>
                                <Link to='../car-details'>
                                    <p className="btn btn-primary" onClick={() => { setCarDetailed(post.model) }}>
                                        More details
                                    </p>
                                </Link>
                            </div>
                            <span
                                className="card-footer bg-black text-muted"
                                onClick={() => {
                                    let car = {
                                        id: post.id,
                                        model: post.model,
                                        type: post.type,
                                        make: post.make,
                                        year: post.year,
                                    };
                                    saveCar(car);
                                    console.log(car);
                                }}
                            >
                                <i className="btn btn-black text-light border border-light" >
                                    <Icon.BookmarkPlus /> Save Advert
                                </i>
                            </span>
                        </div>
                    </div>
                ))
            ) : null}
        </>
    );
}

export default GetCars;
 */