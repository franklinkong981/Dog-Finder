import React from "react";
import {Link} from "react-router-dom";

const DogList = ({dogsBriefInfo}) => {
  return (
    <div className="DogList">
      <h1 className="DogList-header">Welcome to the Dog Finder!</h1>
      <h2 className="DogList-header-2">List of dogs:</h2>
      {dogsBriefInfo.map((dog) => (
        <div className="DogList-dog">
          <img className="DogList-dog-picture" src={dog.src} alt={`Picture of ${dog.name}`}/><br/>
          <Link className="DogList-dog-name" to={`/dogs/${dog.name}`}>{dog.name}</Link>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default DogList;