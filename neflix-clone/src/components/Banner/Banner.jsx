import React, { useState, useEffect } from 'react';
import axios from "../../utils/axios";
import requests from '../../utils/requests';
import "./banner.css"
function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request)
                const randomIndex = Math.floor(Math.random() * request.data.results.length);
                console.log(randomIndex)
                console.log(movie)
                setMovie(request.data.results[randomIndex]);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const truncateText = (text, maxLength) => {
        return text?.length > maxLength ? text.substring(0, maxLength-1) + '...' : text;
    };
   

    return (
        <>

        
        <div className='banner' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__buttons play'>Play</button>
                    <button className='banner__buttons'>My List</button>
                </div>
                {/* <h1 className='banner_description'>{substring(movie?.overview,150)}</h1>  */}
                <h1 className='banner_description'>{truncateText(movie?.overview,150)}</h1>
            </div>
            <div className='banner__fadeBottom' ></div>
        </div>
        </>
    );
}

export default Banner;

// results = [1,2,3,4,5,5,6]
// reslts[9]\//
