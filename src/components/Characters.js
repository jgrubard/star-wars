import React, { Component } from 'react';

import '../css/Characters.css';
import { SWLink } from './Library';

import { characters } from '../characters.json';

class Characters extends Component {
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
              return (
                <div key={index} className='name-links'>
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