import React, { useState } from 'react'
import defaultBackground from "../default.jpg";
import Spinner from './Spinner';


export default function Movieitem({image, year, movieID, movieName,  setpopupTrigger, setselectedMovie}) {

    const [loading, setloading] = useState(false);

    const movieClicked = async ()=>{

                // fetching movie info for movie popup
                let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=3c4c81a986ee24ee5a70b5a839bd8b4f&language=en-US`;
                setloading(true)
                let movieInfo = await fetch(url);
                let parsedMovieInfo = await movieInfo.json()
                setselectedMovie(parsedMovieInfo);
                console.log(parsedMovieInfo);
                setloading(false);

                // triggering popup
                setpopupTrigger(true);
    }

    return (
        <div onClick={movieClicked} className="movieBody">
                <div className="popupLoading">
                    {loading ? <Spinner/> : ''}
                </div>
            <img src={image ? `https://image.tmdb.org/t/p/w500${image}` : defaultBackground } alt="movie background" />  
            <div className="movieDetails">
                <p>{movieName}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}
