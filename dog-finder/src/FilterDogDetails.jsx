import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import DogDetails from "./DogDetails.jsx";

const FilterDogDetails = ({allDogsInfo}) => {
  const {name} = useParams();
  const navigate = useNavigate();
  const [selectedDog] = allDogsInfo.filter((dog) => dog.name == name);
  return (
    <>
      {selectedDog ? <DogDetails dogInfo={selectedDog}/> : null}
      <button onClick={() => navigate("/dogs")}>Back to Home Page</button>
    </>
  );
};

export default FilterDogDetails;