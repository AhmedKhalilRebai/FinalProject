import React, { useState } from 'react';
import MovieList from './Content/MovieList';
import NavWelcome from './Content/NavWelcome';
import WelcomeHeader from './Content/WelcomeHeader';
import GenreDropdown from './Content/GenreDropdown';

function Welcome() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Category');

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <NavWelcome searchTerm={searchTerm} handleSearchChange={(e) => setSearchTerm(e.target.value)} />
      <WelcomeHeader />
      <div className="d-flex justify-content-start mt-4 mb-4">
        <GenreDropdown selectedGenre={selectedGenre} onGenreSelect={handleGenreSelect} />
      </div>
      <MovieList searchTerm={searchTerm} selectedGenre={selectedGenre} />
    </div>
  );
}


export default Welcome;