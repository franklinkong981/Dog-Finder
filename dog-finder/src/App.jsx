import React from 'react';
import {Routes, Navigate, Route} from "react-router-dom";
import './App.css';

import DogList from "./DogList.jsx";
import FilterDogDetails from "./FilterDogDetails.jsx";

function App({dogsInfo}) {

  return (
   <div className="App">
    {/*<Nav/>*/}
    <Routes>
      <Route path="/dogs" element={<DogList dogsBriefInfo={dogsInfo}/>} />
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
      src: "images/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "images/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "images/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "images/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims to anymore."
      ]
    }
  ]
};

export default App;
