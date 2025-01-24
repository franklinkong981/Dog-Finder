import React from "react";
import {v4 as uuid} from 'uuid';
import {Link} from "react-router-dom";

const DogList = ({dogsInfo}) => {
  return (
    <div className="DogList">
      <h1 className="DogList-header">Welcome to the Dog Finder!</h1>
      <h2 className="DogList-header-2">List of dogs:</h2>
      {dogsInfo.map((dog) => (
        <div key={uuid()} className="DogList-dog">
          <img className="DogList-dog-picture" src={dog.src} alt={`Picture of ${dog.name}`}/><br/>
          <Link className="DogList-dog-name" to={`/dogs/${dog.name}`}>{dog.name} - {dog.age} years old</Link>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default DogList;