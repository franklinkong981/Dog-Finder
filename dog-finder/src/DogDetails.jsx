import React from "react";

const DogDetails = (dogInfo) => {
  return (
    <div className="DogDetails">
      <img className="DogDetails-image" src={dogInfo.src} alt={`Picture of ${dogInfo.name}`} />
      <h2 classname="DogDetails-name">Name: {dogInfo.name}</h2>
      <p className="DogDetails-age">Age: {dogInfo.age}</p>
      <h4 classname="DogDetails-facts-header">Fun facts about ${dogInfo.name}:</h4>
      <ul className="DogDetails-facts">
        {dogInfo.facts.map((fact) => (
          <li className="DogDetails-fact">{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;