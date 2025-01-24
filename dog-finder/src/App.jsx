import React from 'react';
import {Routes, Navigate, Route} from "react-router-dom";
import './App.css';

import DogList from "./DogList.jsx";
import FilterDogDetails from "./FilterDogDetails.jsx";

import Whiskey from "./assets/images/whiskey.jpg";
import Perry from "./assets/images/perry.jpg";
import Duke from "./assets/images/duke.jpg";
import Tubby from "./assets/images/tubby.jpg";

function App({dogsInfo}) {

  return (
   <div className="App">
    {/*<Nav/>*/}
    <Routes>
      <Route path="/dogs" element={<DogList dogsInfo={dogsInfo}/>} />
      <Route path="/dogs/:name" element={<FilterDogDetails allDogsInfo={dogsInfo}/>} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
   </div>
  );
}

App.defaultProps = {
  dogsInfo: [
    {
      name: "Whiskey",
      age: 5,
      src: Whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: Duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: Perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: Tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims to anymore."
      ]
    }
  ]
};

export default App;
