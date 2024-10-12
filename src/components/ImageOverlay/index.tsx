import React from 'react';
import "./style.css";

interface ImageOverlayProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <img src={imageSrc} alt="Document preview" className="overlay-image" />
    </div>
  );
};

export default ImageOverlay;
