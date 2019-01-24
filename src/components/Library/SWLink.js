import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/SWLink.css';

const SWLink = ({ label, path }) => {
  return (
    <Link
      to={path}
      className='return-link'
    >
      {label}
    </Link>
  );
}

export default SWLink;