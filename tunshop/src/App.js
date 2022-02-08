import './index.css';
import Home from './Components/Home.js'; 
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar1 from './Components/navbar.js';
import Weather from './Components/Weather.js';
import Blog from './Components/Blog.js';
import React, {Component, useState} from 'react';


const App = ()=> {
  
  const [weather, setweather] = useState("none");
  const [location, setlocation] = useState("")
   
  return (

    <Router>
       
    <div>
    <Navbar1 />
    <Switch> 
      <Route exact path="/">
         <Home  weather={weather} location={location} setweather={setweather} setlocation={setlocation} />
      </Route>
      <Route path="/weather">
         <Weather weather={weather} location={location}  />
      </Route>
      <Route path="/blog">
         <Blog  />
      </Route>
    </Switch>

    </div>
    </Router>
  )
}

export default App;

