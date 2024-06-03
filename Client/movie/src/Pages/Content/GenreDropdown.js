// src/components/GenreDropdown.js
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function GenreDropdown({ selectedGenre, onGenreSelect }) {
  const genres = ['Thriller', 'Science-Fiction', 'Mystery', 'Action', 'Adventure'];

  return (
    <DropdownButton id="dropdown-basic-button" title={selectedGenre || 'Select Genre'}>
      {genres.map((genre) => (
        <Dropdown.Item key={genre} onClick={() => onGenreSelect(genre)}>
          {genre}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default GenreDropdown;
