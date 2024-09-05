import React, { useState,useEffect } from 'react'
import "./row.css";
import axios from "../../../utils/axios"
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';

function Rows({title,fetchUrl,isLargeRow}) {
    const [movies,setMovie] = useState([])
    const [trailerUrl,setTraileUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(()=> {
      (async () => {
        try {
          console.log(fetchUrl)
          const request = await axios.get(fetchUrl);
          console.log(request)
          setMovie(request.data.results)
        }catch (error) {
          console.log("error",error);
        }
      })()
    },[fetchUrl]);

    const handlerClick = (movies) =>{
        if (trailerUrl) {
          setTraileUrl('')
        }else{
          movieTrailer(movies.title || movies?.name || movies?.original_name)
          .then((url) => {
            console.log(url)
            const urlParams = new URLSearchParams(new URL(url).search)
            console.log(urlParams)
            console.log(urlParams.get('v'))
            setTraileUrl(urlParams.get('v'));
          })
        }
    }

    const opts = {
      height: '390',
      width: "100%",
      playerVars: {
        autoplay : 1,
      },
    }
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row__posters'>
              {movies?.map((movies,index) =>(
                <img
                 onClick = {()=> handlerClick(movies)}
                key = {index} src = {`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`} alt = {movies.name} className={ `row__poster  ${isLargeRow && "row__posterLarge"}`}/>
              ))}

        </div>
        <div style = {{padding:'40px'}}>
              {trailerUrl && <YouTube videoId = {trailerUrl} opts= {opts} />}
        </div>
    </div>
  )
}

export default Rows
