import React from 'react';
import {Switch, Navigate, Route} from "react-router-dom";
import './App.css';

function App() {

  return (
   <div className="App">
    <Nav/>
    <Switch>
      <Route path="/dogs" element={<DogList/>} />
      <Route path="/dogs:name" element={<DogDetails/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
   </div>
  );
}

export default App;
