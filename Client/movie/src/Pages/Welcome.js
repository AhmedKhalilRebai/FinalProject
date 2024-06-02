import React, { useState } from 'react';
import MovieList from './Content/MovieList';
import NavWelcome from './Content/NavWelcome';
import WelcomeHeader from './Content/WelcomeHeader';

function Welcome() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <NavWelcome searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <WelcomeHeader />
      <MovieList searchTerm={searchTerm} />
    </div>
  );
}

export default Welcome;
