import React from "react";
import DestinationCard from "./DestinationCard";
import destinations from "../data";

const DestinationList = () => {
  return (
    <div className="destination-list">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationList;
