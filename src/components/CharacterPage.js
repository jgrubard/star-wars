import React, { Component } from 'react';
import axios from 'axios';

import { SWLink } from './Library';
import CharacterCard from './CharacterCard';
import AllFilms from './AllFilms';
import FilmCard from './FilmCard';

import '../css/CharacterPage.css'

const Spinner = require('react-spinkit');

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
    this.filmRef = React.createRef();
    this.renderFilmCard = this.renderFilmCard.bind(this);
  }

  generateError(err) {
    console.error(err);
    const error = {
      status: err.response ? err.response.status : 500,
      message: err.response ? err.response.data.detail : err.message
    }
    window.localStorage.setItem('error', JSON.stringify(error))
    this.props.history.push('/error');
  }
  
  async retrieveMovies(character) {
    try {
      let { films } = character;
      const _movies = films.map( async(_film) => {
        const response = await axios.get(_film);
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
      this.generateError(err);
    }
  }

  async retrieveCharacter() {
    try {
      const { id } = this.props;
      const response = await axios.get(`https://swapi.co/api/people/${id}/`)
      const character = await response.data
      await this.setState({ character });
      await this.setState({ charLoaded: true });
      await this.retrieveMovies(character);
    } catch(err) {
      this.generateError(err);
    }
  }

  async renderFilmCard(ev, film) {
    ev.preventDefault();
    await this.setState({ selectedFilm: film });
    await this.scrollToFilmRef();
  }
  
  async componentDidMount() {
    this.retrieveCharacter();
  }

  scrollToFilmRef() {
    const newLocation = this.filmRef.current.offsetTop;
    window.scrollTo(0, newLocation);
  }

  render() {
    const { charLoaded, character, filmsLoaded, films, selectedFilm } = this.state;
    const { renderFilmCard } = this;
    const filmLoaded = !!selectedFilm.title;
    return (
      <div>
        <div className='link-spacing'>
        <SWLink
          label='Return to All Characters'
          path={'/'}
        />
        </div>
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
        <div ref={this.filmRef}>
          { filmLoaded && <FilmCard film={selectedFilm} /> }
        </div>
      </div>
    );
  }
}

export default CharacterPage;