import React from 'react';
import MovieCard from './MovieCard';
import Data from './Data';

function MovieList({ searchTerm }) {
  const filteredMovies = Data.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredMovies.map(movie => (
          <div className="col-lg-4 col-md-6 mb-4" key={movie.title}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              posterURL={movie.posterURL}
              rating={movie.rating}
              genre={movie.genre}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
