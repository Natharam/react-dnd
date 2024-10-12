import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImageOverlay from "../../components/ImageOverlay";
import { mockFetchDocuments } from "../../mocks/moch-fetch";
import Card from "../../components/Card";
import "./style.css";

interface Document {
  id: string;
  title: string;
  image: string;
}

const DragDropComponent: React.FC = () => {
  const [cards, setCards] = useState<Document[]>([]);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // Fetch documents from the mock API
      const response = await mockFetchDocuments();
      const docs: Document[] = await response.json();
      setCards(docs);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const moveCard = (fromIndex: number, toIndex: number) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  const handleCardClick = (imageSrc: string) => {
    setOverlayImage(imageSrc);
  };

  const closeOverlay = () => {
    setOverlayImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
