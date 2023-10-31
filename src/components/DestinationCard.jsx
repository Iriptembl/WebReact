// DestinationCard.js
import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h2>{destination.name}</h2>
      {destination.description.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default DestinationCard;
