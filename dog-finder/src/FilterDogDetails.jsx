import React from "react";
import {useParams, useNavigate} from "react-router-dom";

const FilterDogDetails = ({allDogsInfo}) => {
  const {name} = useParams();
  const navigate = useNavigate();
  return (
    <>
      {name ? (
        allDogsInfo.filter((dog) => dog.name == name).map((dog) => {
          return <DogDetails dogInfo={dog}/>
        })
      ) : null}
      <button onClick={() => navigate("/dogs")}>Back to Home Page</button>
    </>
  );
};

export default FilterDogDetails;