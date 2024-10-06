import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Loader from "../Loader";
import "./style.css";

const Card = ({ card, index, moveCard, onCardClick }) => {
  const [loading, setLoading] = useState(true);

  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const handleImageLoad = () => setLoading(false);

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={() => onCardClick(card.image)}
    >
      {loading && <Loader />}
      <img
        src={card.image}
        alt={card.title}
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
      {!loading && <div className="card-title">{card.title}</div>}
    </div>
  );
};

export default Card;
