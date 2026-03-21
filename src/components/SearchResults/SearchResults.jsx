import React from "react";
import axios from "axios";
import "./SearchResults.css";
import MovieCard from "../Ui/MovieCard";

const SearchResults = ({ movies }) => {
  return (
    <>
      <div className="results__container">
        <div className="results__row">
          <div className="movies">
            {
            movies && movies.length > 0 ? (
              movies
                .slice(0, 6)
                .map((movie, index) => (
                  <MovieCard movie={movie} key={movie.imdbID + index} />
                ))
            ) : (
              <p>No movies found</p>
            )
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchResults;
