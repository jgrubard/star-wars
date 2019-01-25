import React, { Component } from 'react';
import SWLink from './Library/SWLink';

import '../css/Characters.css'

import { characters } from '../characters.json';

class Characters extends Component {
  render() {
    return (
      <div>
        <div className='select-message'>Select a character for more info</div>
        <div>
          {
            characters.map((char, index) => {
              const charId = char.url.split('/')[5];
              const isValid = !isNaN(parseInt(charId));
              const url = isValid ? `/characters/${charId}` : '/error';
              return (
                <div key={index} className='name-links'>
                  <SWLink
                    path={url}
                    label={char.name}
                    style={{ fontSize: '18pt' }}
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