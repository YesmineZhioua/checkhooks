import React, { useState } from 'react';
import { moviesList } from './Films';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

function Movies() {
  
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState('');
  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
  const handleSearch = (e) => setSearchWord(e.target.value);
//fih 3 partie ili yjwna f interface
  return (
    <div className='container'>
      <SearchBar
        handleSearch={handleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <MovieList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}

export default Movies;