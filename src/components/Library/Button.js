import React from 'react';

import '../../css/Button.css';

const Button = ({ onClick, label }) => {
  return (
    <button
      className='btn'
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;