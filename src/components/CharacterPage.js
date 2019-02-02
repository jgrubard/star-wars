import React, { Component } from 'react';
import axios from 'axios';
// import LinkButton from './Library/LinkButton';
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
    this.filmRef = React.createRef();
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
      const error = {
        status: err.response.status,
        message: err.response.data.detail
      }
      window.localStorage.setItem('error', JSON.stringify(error))
      this.props.history.push('/error');
    }
  }

  // async retrieveCharacter() {
  //   try {
  //     const char = JSON.parse(window.localStorage.getItem('character'));
  //     await this.setState({ character: char })
  //     // await this.setState({ charLoaded: true });
  //     await this.retrieveMovies(char);
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  async renderFilmCard(ev, film) {
    ev.preventDefault();
    await this.setState({ selectedFilm: film });
    await this.scrollToFilmRef();
  }
  
  async componentDidMount() {
    this.retrieveCharacter();
  }

  scrollToFilmRef() {
    // console.log(this.filmRef);
    const newLocation = this.filmRef.current.offsetTop;
    // console.log(newLocation);
    // window.scrollTo(0, this.filmRef.current.offsetTop);
    // console.log(window)
    window.scrollTo(0, newLocation);
  }

  render() {
    const { charLoaded, character, filmsLoaded, films, selectedFilm } = this.state;
    const { renderFilmCard } = this;
    const filmLoaded = !!selectedFilm.title;
    return (
      <div>
        <div className='link-spacing'>
        {/* <LinkButton
          label='Return to All Characters'
          onClick={() => this.props.history.push('/')}
        /> */}
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
          { filmLoaded ? <FilmCard film={selectedFilm} /> : <span/>}
        </div>
      </div>
    );
  }
}

export default CharacterPage;