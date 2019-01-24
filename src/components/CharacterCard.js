import React from 'react';
import luke from '../images/luke-skywalker.jpg';
import vader from '../images/darth-vader.jpg';
import r2d2 from '../images/r2-d2.jpg';

import '../css/CharacterCard.css'

const images = {
  'Luke Skywalker': luke,
  'Darth Vader': vader,
  'R2-D2': r2d2
};

const CharacterCard = ({ character }) => {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = character;
  return (
    <div>
      <h3>{name}</h3>
      <img
        src={images[name]}
        alt={name}
        className='profile-image'
      />
      <div className='profile-text'>
        <div>Height: {height}, Mass: {mass}</div>
        <div>Hair: {hair_color}, Skin: {skin_color}</div>
        <div>Eyes: {eye_color}</div>
        <div>Birth: {birth_year}, Gender: {gender}</div>
      </div>
    </div>
  );
}

export default CharacterCard;