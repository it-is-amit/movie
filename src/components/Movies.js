import React, { useState } from "react";
import Movieitem from "./Movieitem";
import Popup from "./Popup";

export default function Movies({ parsedData }) {
  const [popupTrigger, setpopupTrigger] = useState(false);
  const [selectedMovie, setselectedMovie] = useState([]);

  return (
    <div className="MoviesSectionCustomCSS container-fluid">
      <div className="row">
        {parsedData.map((details) => {
          return (
            <div className="col-md-3">
              <Movieitem
                // calling movie item and passing movie details into movie item
                image={details.poster_path}
                year={details.release_date}
                movieName={details.original_title}
                movieID={details.id}
                popupTrigger={popupTrigger}
                setpopupTrigger={setpopupTrigger}
                setselectedMovie={setselectedMovie}
              />
            </div>
          );
        })}
      </div>

      <Popup
        // calling popup and passing data to display
        movieName={selectedMovie.original_title}
        year={selectedMovie.release_date}
        overview={selectedMovie.overview}
        runtime={selectedMovie.runtime}
        id={selectedMovie.imdb_id}
        popupImage={selectedMovie.poster_path}
        genre={selectedMovie.genres}
        budget={selectedMovie.budget}
        language={selectedMovie.original_language}

        trigger={popupTrigger}
        setpopupTrigger={setpopupTrigger}
        selectedMovie={selectedMovie}
      />
    </div>
  );
}
