import React from 'react';
import moment from 'moment';

import Button from './Library/Button';

const AllFilms = ({ films, renderFilmCard }) => {
  return (
    <div>
    <h3>Films:</h3>
    {
      films.map((film, index) => {
        const year = moment(new Date(film.release_date)).format('YYYY');
        return (
          <div key={index}>
                      <Button
              onClick={(ev) => renderFilmCard(ev, film)}
              label='Read More'
            />
            <span>Episode {film.episode_id}: {film.title} ({year})</span>

          </div>
        );
      })
    }
  </div>
  );
}

export default AllFilms;