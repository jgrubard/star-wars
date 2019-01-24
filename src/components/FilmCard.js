import React from 'react';
import moment from 'moment';
import '../css/CharacterCard.css'

const FilmCard = ({ film }) => {
  const fullDate = moment(new Date(film.release_date)).format('dddd, MMMM Do, YYYY');
  return (
    <div>
      <h4>Episode {film.episode_id}: {film.title}</h4>
      <h5>Release Date: {fullDate}</h5>
      <p>{film.opening_crawl}</p>
    </div>
  );
}

export default FilmCard;