import React from 'react';

import '../css/Nav.css';

const Nav = () => {
  return (
    <div>
      <div className='logo-container'>
        <img
          className='star-wars-logo' src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg'
          alt='Star Wars Logo'
        />
      </div>
    </div>
  );
}

export default Nav;