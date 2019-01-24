import React, { Component } from 'react';
import axios from 'axios';
import SWLink from './Library/SWLink';

import CharacterCard from './CharacterCard';
import AllFilms from './AllFilms';
import FilmCard from './FilmCard';

import '../css/CharacterPage.css'

const Spinner = require('react-spinkit');
const CORS = 'https://cors-anywhere.herokuapp.com/';

class CharacterPage extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      films: [],
      charLoaded: false,
      filmsLoaded: false,
      selectedFilm: {}
    }
    this.renderFilmCard = this.renderFilmCard.bind(this);
  }
  
  async retrieveMovies(character) {
    try {
      let { films } = character;
      const _movies = films.map( async(_film) => {
        const response = await axios.get(CORS + _film);
        const film = await response.data;
        return film;
      })
      let movies = await Promise.all(_movies);
      movies = movies.sort((a, b) => {
        return new Date(a.release_date) - new Date(b.release_date);
      });
      await this.setState({ films: movies });
      await this.setState({ filmsLoaded: true });
    } catch(err) {
      console.log(err);
    }
  }

  async retrieveCharacter() {
    try {
      const { id } = this.props;
      const response = await axios.get(`${CORS}https://swapi.co/api/people/${id}/`)
      const character = await response.data
      await this.setState({ character });
      await this.setState({ charLoaded: true });
      await this.retrieveMovies(character);
    } catch(err) {
      console.log(err);
    }
  }

  renderFilmCard(ev, film) {
    ev.preventDefault();
    this.setState({ selectedFilm: film });
  }
  
  componentDidMount() {
    this.retrieveCharacter();
  }

  render() {
    const { charLoaded, character, filmsLoaded, films, selectedFilm } = this.state;
    const { renderFilmCard } = this;
    const filmLoaded = !!selectedFilm.title;
    return (
      <div>
        <SWLink
          path='/'
          label='Return to All Characters'
        />
        <div className='char-flex-container'>
          
          <div className='char-flex-item-pic'>
            {
              charLoaded ? (
                <CharacterCard character={character}/>
              ) : (
                <div>
                  <h3>Character Loading...</h3>
                  <Spinner name='three-bounce' color='white' />
                </div>
              )
            }
          </div>
          <div className='char-flex-item-films'>
            {
              filmsLoaded ? (
                <AllFilms films={films} renderFilmCard={renderFilmCard}/>
              ) : (
                <div>
                  <h3>Films Loading...</h3>
                  <Spinner name='three-bounce' color='white' />
                </div>
              )
            }
          </div>
        </div>
        <div>
          { filmLoaded && <FilmCard film={selectedFilm} /> }
        </div>
      </div>
    );
  }
}

export default CharacterPage;