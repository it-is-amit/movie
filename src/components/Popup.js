import React from 'react'
import defaultBackground from "../default.jpg";

export default function Popup(props) {

    return (props.trigger) ? (
        <div onClick={()=>props.setpopupTrigger(false)} className="popup-Outer">
            <div className="popup-Inner">
                {/* popup inner content */}
                <div className="inpopup-movieDetails">
                    <div className="inpopup-movieTextContents">


                        <h2>{props.movieName}</h2>
                        <h5>Release Date : {props.year}</h5>
                        <p>{props.overview}</p>
                        <p>Duration : {props.runtime} mins</p>
                        <p>IMDB Id - {!props.id ? 'Not Avialable' : props.id}</p>
                        <p>Movie Budget - {props.budget}</p>
                        <p>Orignal Language - {props.language}</p>


                    </div>
                    <button disabled type="button" className="buttonCustomCSS btn btn-danger mt-2">Download Now</button>
                    <div className="inpopup-movieImage">
                        <img src={props.popupImage ? `https://image.tmdb.org/t/p/w500${props.popupImage}` : defaultBackground } alt="movie background" />    
                    </div>  
                </div>
                
                {/* popup blurred background image */}
                <div className="image">
                    <img src={props.popupImage ? `https://image.tmdb.org/t/p/w500${props.popupImage}` : defaultBackground } alt="movie background" />    
                </div>
            </div>
        </div>
    ) : "";
}