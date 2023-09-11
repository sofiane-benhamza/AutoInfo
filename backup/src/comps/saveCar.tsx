import React, { useState, useEffect } from 'react';

interface vehicle { id: string }

function CarApp({ car }: vehicle) {
    const [savedCars, setSavedCars] = useState([]);

    // Load saved cars from localStorage on component mount
    useEffect(() => {
        const savedCarsData = JSON.parse(localStorage.getItem('savedCars')) || [];
        setSavedCars(savedCarsData);
    }, []);

    // Function to save a car
    const saveCar = (car) => {
        // Check if the car is already saved by comparing IDs
        const isCarSaved = savedCars.some((savedCar) => savedCar.id === car.id);

        if (!isCarSaved) {
            // Add the car to the savedCars array
            const updatedSavedCars = [...savedCars, car];
            setSavedCars(updatedSavedCars);

            // Store the updated savedCars array in localStorage
            localStorage.setItem('savedCars', JSON.stringify(updatedSavedCars));
        }
        saveCar(car)
    };
    export default saveCar