import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetLogo from './GetLogo';
import { useSpring, animated } from '@react-spring/web';
import * as Icon from 'react-bootstrap-icons';

interface Props {
    make: string;
    type: string;
    year: string;
}

function GetCars({ make, type, year }: Props) {
    const [posts, setPosts] = useState<any[]>([]);
    const [selected, setSelected] = useState<number>(-1);

    useEffect(() => {

        axios.defaults.headers['X-RapidAPI-Key'] = '4162e2dfa3mshf0649fbee3b7ddcp12cf7fjsn70630caf6ddb';
        axios.defaults.headers['X-RapidAPI-Host'] = 'car-data.p.rapidapi.com';

        var URL = `https://car-data.p.rapidapi.com/cars?limit=40`;

        make.length > 0 && (URL += `&make=${make}`);
        type.length > 0 && (URL += `&type=${type}`);
        year.length > 0 && (URL += `&year=${year}`);

        axios
            .get(URL)
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    const springs = useSpring({
        from: { y: -100 },
        to: { y: 0 },
        trail: 2000
    })

    return (
        <>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <animated.div style={{ ...springs, }} className="col-lg-2 col-md-3 col-sm-12 overflow-hidden " key={index}>
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

                                <a href="#" className="btn btn-primary">
                                    More details
                                </a>
                            </div>
                            <span className="card-footer bg-black text-muted " href="#">
                                <i className='btn btn-black text-light border border-light'><Icon.BookmarkPlus /> save advert </i>
                            </span>
                        </div>
                    </animated.div >
                ))
            ) : null
            }
        </>
    );
}

export default GetCars;
