import React from 'react';

import './FloatingButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
<FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faGlobe}/>
    </div>
  );
};

export default FloatingButtons;