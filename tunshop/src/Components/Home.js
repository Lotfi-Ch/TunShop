import React, {Component, useState} from 'react';
import '../index.css';
import axios from "axios"; 
import { Link , useHistory } from "react-router-dom"; 

export default function Home (props) {
  
  


   const history = useHistory();
  
  function onInputchange(event, func){
    func(event.target.value)
    console.log(event.target.value)
  }

  function onSubmitForm() {
    
    console.log(props.location)
    const abortCont = new AbortController()
    axios.get(`http://localhost:5050/getWeather/${props.location}`)
    .then (res => {
      let respWeather = res.data
      props.setweather(respWeather) 
      
    }).catch((err)=>{
      if (err.name === "AbortError"){
        console.log("Fetch aborted ")
      }
    })
    setTimeout(() => {
    history.push("/weather")  
    }, 1000);
    
    return () => abortCont.abort();

  }



  
  return (
  
  <div> 
<div class="bg-white ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black  sm:text-4xl">
            <span class="block">
                Want to be know the weather ?
            </span>
            <span class="block text-indigo-500 py-8 ">
                Enter location
            </span>
        </h2>
        <input name="location"
              type="text"
              value={props.location}
              onChange={(e) => onInputchange(e,props.setlocation)}
               class="py-4 px-6  focus:ring-offset-indigo-200 text-black  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "  placeholder="Location">
            
        </input>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
            <button onClick={onSubmitForm} type="button" class="py-6  px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                     Submit 
                </button>
            </div>
        </div>
    </div>

    
    
  </div>
  </div>
)
  
};
