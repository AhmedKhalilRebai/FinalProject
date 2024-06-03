// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import Movies from './Data'; // Import the movie data

function MovieList({ searchTerm, selectedGenre }) {
  const filteredMovies = Movies.filter((movie) => {
    const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'Category' || movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    return matchesSearchTerm && matchesGenre;
  });

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredMovies.map((movie) => (
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
