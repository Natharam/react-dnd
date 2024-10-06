import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImageOverlay from "../../components/ImageOverlay";
import { mockFetchDocuments } from "../../mocks/moch-fetch";
import Card from "../../components/Card";
import "./style.css";

const DragDropComponent = () => {
  const [cards, setCards] = useState([]);
  const [overlayImage, setOverlayImage] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // Fetch documents from the mock API
    const response = await mockFetchDocuments();
    const docs = await response.json();
    setCards(docs);
  };

  const moveCard = (fromIndex, toIndex) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  const handleCardClick = (imageSrc) => {
    setOverlayImage(imageSrc);
  };

  const closeOverlay = () => {
    setOverlayImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeOverlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            moveCard={moveCard}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      {overlayImage && (
        <ImageOverlay imageSrc={overlayImage} onClose={closeOverlay} />
      )}
    </DndProvider>
  );
};

export default DragDropComponent;
