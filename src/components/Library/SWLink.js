import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/SWLink.css';

const SWLink = ({ label, path, style }) => {
  return (
    <Link
      to={path}
      className='return-link'
      style={style ? style : null}
    >
      {label}
    </Link>
  );
}

export default SWLink;