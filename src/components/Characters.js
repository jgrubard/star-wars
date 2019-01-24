import React, { Component } from 'react';
import SWLink from './Library/SWLink';

import { characters } from '../characters.json';

class Characters extends Component {
  render() {
    return (
      <div>
        <h2>Characters</h2>
        <div>
          {
            characters.map((char, index) => {
              const charId = char.url.split('/')[5];
              const isValid = !isNaN(parseInt(charId));
              const url = isValid ? `/characters/${charId}` : '/error';
              return (
                <div key={index}>
                  <SWLink
                    path={url}
                    label={char.name}
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