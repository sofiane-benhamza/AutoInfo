import GetLogo from "./GetLogo";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import * as Icon from 'react-bootstrap-icons';

interface car {
    id: any;
    make: any;
    type: any;
    year: any;
    model: any;
}


function SavedCars() {
    const [savedCars, setSavedCars] = useState([]);

    // Load saved cars from localStorage on component mount
    useEffect(() => {
        const savedCarsDataString = localStorage.getItem('savedCars');
        const savedCarsData = savedCarsDataString ? JSON.parse(savedCarsDataString) : [];
        setSavedCars(savedCarsData);
    }, []);

    function clearLS() {
        localStorage.clear();
    }

    // Usage example:




    return (
        <div className="bg-black min-vh-100"><br />
            <div onClick={clearLS} className="text-center"><span className="btn btn-primary"><Icon.Trash2Fill />  Clear Saved Cars</span></div>
            <div className="container d-flex gap-1 flex-wrap justify-content-around bg-black">
                {savedCars.length > 0 ? (
                    savedCars.map((post: car, index) => (
                        <div key={index} className="col-lg-2 col-md-3 col-sm-12 overflow-hidden m-3">
                            <div className="card text-center">
                                <div className="card-header border-primary border ">
                                    {post.make}
                                </div>
                                <div className="card-body bg-black text-light">
                                    <h5 className="card-title">
                                        <GetLogo title={post.make.toLowerCase()} />
                                    </h5>
                                    <p className="card-text">
                                        model : <i>{post.model}</i><br />
                                        class : <i>{post.type}</i><br />
                                        year : <i>{post.year}</i>
                                        <br />
                                    </p>

                                    <p className="btn btn-primary" onClick={() => { }}>
                                        More details
                                    </p>
                                </div>
                            </div>
                        </div >
                    ))
                ) : <h2 className="text-center btn btn-warning p-3 m-5"><i>no cars saved yet</i></h2>
                }
            </div>
        </div>
    );
}

export default SavedCars;
