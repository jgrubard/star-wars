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

const images = {
  '1': episode1,
  '2': episode2,
  '3': episode3,
  '4': episode4,
  '5': episode5,
  '6': episode6,
  '7': episode7,
}

const romanNumerals = {
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
  '6': 'VI',
  '7': 'VII',
}

// const FilmCard = ({ film, reference }) => {
//   console.log('ref', reference);
//   const fullDate = moment(new Date(film.release_date)).format('dddd, MMMM Do, YYYY');
//   const { episode_id, title, opening_crawl } = film;
//   return (
//     <div ref={reference} className='film-flex-container'>
//       <div className='film-flex-item-image'>
//         <img
//           className='film-poster'
//           src={images[episode_id]}
//           alt={`Episode ${episode_id} Poster`}
//         />
//       </div>
//       <div className='film-flex-item-text'>
//         <div className='film-title'>Episode {romanNumerals[episode_id]}: {title}</div>
//         <div className='film-release'>Release Date: {fullDate}</div>
//         <div className='film-crawl'>{opening_crawl}</div>
//       </div>
//     </div>
//   );
// }

class FilmCard extends React.Component {

render() {
  const { film } = this.props;
  const fullDate = moment(new Date(film.release_date)).format('dddd, MMMM Do, YYYY');
  const { episode_id, title, opening_crawl } = film;
  return (
    <div className='film-flex-container'>
      <div className='film-flex-item-image'>
        <img
          className='film-poster'
          src={images[episode_id]}
          alt={`Episode ${episode_id} Poster`}
        />
      </div>
      <div className='film-flex-item-text'>
        <div className='film-title'>Episode {romanNumerals[episode_id]}: {title}</div>
        <div className='film-release'>Release Date: {fullDate}</div>
        <div className='film-crawl'>{opening_crawl}</div>
      </div>
    </div>
  );
}

}

export default FilmCard;