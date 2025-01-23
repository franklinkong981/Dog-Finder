import React from 'react';
import {Switch, Navigate, Route} from "react-router-dom";
import './App.css';

function App({dogs}) {

  return (
   <div className="App">
    <Nav/>
    <Switch>
      <Route path="/dogs" element={<DogList/>} />
      <Route path="/dogs:name" element={<DogDetails/>} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Switch>
   </div>
  );
}

App.defaultProps = {
  dogs: [
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
      src: "images.tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims to anymore."
      ]
    }
  ]
};

export default App;
