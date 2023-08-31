import React from "react";
import { directors } from "../data";

function Directors() { 
  const directors = [
    {
      name: 'Francis Ford Coppola',
      movies: ['The Godfather', 'The Godfather Part II', 'Apocalypse Now'],
    },
    {
      name: 'Martin Scorsese',
      movies: ['Taxi Driver', 'Raging Bull', 'Goodfellas'],
    },
    {
      name: 'Christopher Nolan',
      movies: ['Memento', 'The Dark Knight', 'Inception'],
    },
  ];

  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map((director) => (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};

export default Directors;

