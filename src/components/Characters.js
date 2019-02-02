import React, { Component } from 'react';
// import LinkButton from './Library/LinkButton';
import SWLink from './Library/SWLink';

import '../css/Characters.css'

import { characters } from '../characters.json';
// import axios from 'axios';

// const CORS = 'https://cors-anywhere.herokuapp.com/';

class Characters extends Component {
  // constructor() {
    // super();
    // this.state = {
    //   error: null,
    //   url: ''
    // }
    // this.apiCall = this.apiCall.bind(this);
  // }

  // apiCall(ev, api, id) {
  //   // const output = {
  //   //   data: null,
  //   //   url: null
  //   // }
  //   ev.preventDefault();
  //   axios.get(CORS + api)
  //     .then(res => res.data)
  //     .then(charData => {
  //       // this.setState({ error: null })
  //       // output.data = charData;
  //       // output.url = 
  //       window.localStorage.setItem('character', JSON.stringify(charData));
  //       this.props.history.push({
  //         pathname: `/characters/${id}`,
  //         // state: { character: charData }
  //       })

  //     })
  //     .catch(err => {
  //       // this.setState({ error: err.message })
  //       // console.log({err})
  //       // console.log(err.stack)
  //       const error = {
  //         status: err.response.status,
  //         message: err.response.data.detail
  //       }
  //       window.localStorage.setItem('error', JSON.stringify(error));
  //       this.props.history.push({
  //         pathname: '/error',
  //         // state: { error }
  //       })
  //     })
  // }

  componentDidMount() {
    window.localStorage.removeItem('error');
  }

  render() {
    return (
      <div>
        <div className='select-message'>Select a character for more info</div>
        <div>
          {
            characters.map((char, index) => {
              const charId = char.url.split('/')[5];
              // const isValid = !isNaN(parseInt(charId));
              // this.apiCall(char.url);
              // const isValid = !!this.state.error;

              // console.log(result);
              // const url = isValid ? `/characters/${charId}` : '/error';
              return (
                <div key={index} className='name-links'>
                  {/* <LinkButton
                    onClick={(ev) => this.apiCall(ev, char.url, charId)}
                    label={char.name}
                  /> */}
                  <SWLink
                    path={`/characters/${charId}`}
                    label={char.name}
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Characters;