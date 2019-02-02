import React from 'react';

import '../../css/LinkButton.css';

const Button = ({ onClick, label }) => {
  return (
    <button
      className='link-btn'
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;