import React from "react";
import {Link} from "react-router-dom";

const DogList = (dogsBriefInfo) => {
  return (
    <div className="DogList">
      {dogsBriefInfo.map((dog) => {(
        <div className="DogList-dog">
          <img className="DogList-dog-picture" src={dog.src} alt={`Picture of ${dog.name}`}/>
          <Link className="DogList-dog-name" to={`/dogs/${dog.name}`}>{dog.name}</Link>
          <hr/>
        </div>
      )})}
    </div>
  );
};

export default DogList;