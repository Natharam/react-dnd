import React from 'react';
import "./style.css";

const ImageOverlay = ({ imageSrc, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <img src={imageSrc} alt="Document preview" className="overlay-image" />
    </div>
  );
};

export default ImageOverlay;
