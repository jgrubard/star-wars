import React from 'react';
import moment from 'moment';

import '../css/FilmCard.css'

import episode1 from '../images/star-wars-episode-1.jpg';
import episode2 from '../images/star-wars-episode-2.jpg';
import episode3 from '../images/star-wars-episode-3.jpg';
import episode4 from '../images/star-wars-episode-4.jpg';
import episode5 from '../images/star-wars-episode-5.jpg';
import episode6 from '../images/star-wars-episode-6.jpg';
import episode7 from '../images/star-wars-episode-7.jpg';

const episodeMap = {
  '1': [ 'I', episode1 ],
  '2': [ 'II', episode2 ],
  '3': [ 'III', episode3 ],
  '4': [ 'IV', episode4 ],
  '5': [ 'V', episode5 ],
  '6': [ 'VI', episode6 ],
  '7': [ 'VII', episode7 ]
}

const FilmCard = ({ film }) => {
  const fullDate = moment(new Date(film.release_date)).format('dddd, MMMM Do, YYYY');
  const { episode_id, title, opening_crawl } = film;
  const [ romanNumeral, image ] = episodeMap[episode_id];
  return (
    <div className='film-flex-container'>
      <div className='film-flex-item-image'>
        <img
          className='film-poster'
          src={image}
          alt={`Episode ${episode_id} Poster`}
        />
      </div>
      <div className='film-flex-item-text'>
        <div className='film-title'>Episode {romanNumeral}: {title}</div>
        <div className='film-release'>Release Date: {fullDate}</div>
        <div className='film-crawl'>{opening_crawl}</div>
      </div>
    </div>
  );
}

export default FilmCard;