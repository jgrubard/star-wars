import React, { Component } from 'react';
import moment from 'moment';

import Button from './Library/Button';

import '../css/AllFilms.css';

const romanNumerals = {
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
  '6': 'VI',
  '7': 'VII',
}

class AllFilms extends Component {
  constructor() {
    super();
    this.state = { films: [] }
    this.sortByRelease = this.sortByRelease.bind(this);
    this.sortByChronology = this.sortByChronology.bind(this);
  }

  componentDidMount() {
    this.setState({ films: this.props.films })
  }

  sortByRelease() {
    const films = this.state.films.sort((a, b) => {
      return new Date(a.release_date) - new Date(b.release_date);
    });
    this.setState({ films });
  }

  sortByChronology() {
    const films = this.state.films.sort((a, b) => {
      return parseInt(a.episode_id) - parseInt(b.episode_id);
    });
    this.setState({ films });
  }

  render() {
    const { renderFilmCard } = this.props;
    const { films } = this.state;
    const { sortByRelease, sortByChronology } = this;
    return (
      <div>
        <div className='films-header'>Films:</div>
        <div className='sort-btns'>
          <Button
            label='Sort By Release Date'
            onClick={sortByRelease}
          />
          <Button
            label='Sort By Chronology'
            onClick={sortByChronology}
          />
        </div>
        <div className='all-films'>
          {
            
            films.map((film, index) => {
              const year = moment(new Date(film.release_date)).format('YYYY');
              const bgColor = index % 2 ? '' : ' light';
              return (
                <div
                  className={`btn-and-title${bgColor}`}
                  key={index}
                >
                  <div className='film-text'>
                    Episode {romanNumerals[film.episode_id]}: {film.title} ({year})
                  </div>
                  <div className='film-btn'>
                    <Button
                      onClick={(ev) => renderFilmCard(ev, film)}
                      label='Read More'
                    />
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default AllFilms;