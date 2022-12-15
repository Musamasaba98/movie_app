import React, { useState } from "react";
import "../movie.css";
import { FaHeart} from "react-icons/fa";

function Movie({ title, overview, poster, vote_count, release_date }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="movie-item">
      <img
        className="poster_img"
        src={poster}
        alt="poster_img"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      />
        <div className="movie-item__description"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
          <h3 className="movie-item__description--title">
            {title.split(" ").length > 5
              ? title.split(" ").splice(0, 5).join(" ")
              : title.split(" ").join(" ")}
          </h3>
          {
            isShown &&<>
            <div className="movie-item__description--summary">
            <p>{overview.split(" ").splice(0, 15).join(" ") + "..."}</p>
          </div>
          <div className="movie-item__description--statistics">
            <span><FaHeart className="FaHeart"/>{vote_count}</span>
            <span className="date">{release_date}</span>
          </div>
            </>
            
          }
          
        </div>
      
    </div>
  );
}

export default Movie;
