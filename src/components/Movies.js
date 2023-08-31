import React from "react";
import { movies } from "../data";

function Movies() {
  const movies = [
    {
      title: 'The Shawshank Redemption',
      time: '142 minutes',
      genres: ['Drama', 'Crime'],
    },
    {
      title: 'The Godfather',
      time: '175 minutes',
      genres: ['Crime', 'Drama'],
    },
    {
      title: 'The Dark Knight',
      time: '152 minutes',
      genres: ['Action', 'Crime', 'Drama'],
    },
  ];
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;

