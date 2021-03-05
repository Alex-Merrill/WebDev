import React, { useState, useEffect } from 'react';

import FilmTableContainer from './FilmTableContainer';
import SearchBar from './SearchBar';

function FilmExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('title');
  const [films, setFilms] = useState([]);

  // load the film data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        '/api/films'
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const filmData = await response.json();

      setFilms(filmData);
    };

    getData();
  }, []);

  // change the rating of a film
  const setRating = async (filmid, rating) => {
    const oldFilm = films.find((film) => film.id === filmid);
    const newFilm = { ...oldFilm, rating };

    const response = await fetch(
      `/api/films/${filmid}`,
      {
        method: 'PUT',
        body: JSON.stringify(newFilm),
        headers: new Headers({ 'Content-type': 'application/json' }),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updatedFilm = await response.json();

    const alteredFilms = films.map((film) => {
      if (film.id === filmid) {
        return updatedFilm;
      }
      return film;
    });
    setFilms(alteredFilms);
  };

  const mainContents =
    films.size === 0 ? (
      <h2>Loading...</h2>
    ) : (
      <FilmTableContainer
        searchTerm={searchTerm}
        films={films}
        sortType={sortType}
        setRatingFor={setRating}
      />
    );

  return (
    <div className="FilmExplorer">
      <SearchBar
        searchTerm={searchTerm}
        setTerm={setSearchTerm}
        sortType={sortType}
        setType={setSortType}
      />
      {mainContents}
    </div>
  );
}

export default FilmExplorer;
