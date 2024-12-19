import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="floating-icon" />
      </a>
      <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">
        <SiGoogleclassroom className="floating-icon" />
      </a>
    </div>
  );
};

export default FloatingButtons;