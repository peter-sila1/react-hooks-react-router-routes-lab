import React from "react";
import { actors } from "../data";

function Actors() {
  const actors = [
    {
      name: 'Robert De Niro',
      movies: ['The Godfather', 'Taxi Driver', 'Goodfellas'],
    },
    {
      name: 'Al Pacino',
      movies: ['The Godfather', 'Scarface', 'Heat'],
    },
    {
      name: 'Heath Ledger',
      movies: ['The Dark Knight', '10 Things I Hate About You'],
    },
  ];
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map((actor) => (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};

export default Actors;

