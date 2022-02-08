
import React, { Component, useState, useEffect } from "react";
import "../index.css"

const Weather = ({location, weather}) => {


    const [rend, setRend]= useState("")
    useEffect(() => {
        const timer = setTimeout(() => {
        if (weather !== "none"){
          console.log('This will run after 1 second!')
          setRend(weather)
          console.log(weather)

        }}, 1000);
        return () => clearTimeout(timer);
      });

     

        return (

           <div class="shadow-lg mx-8 my-8 px-4 py-6 w-full bg-white  relative ">
    <p class="text-sm w-max text-gray-700  font-semibold border-b border-gray-200">
        Location
    </p>
    <div class="flex items-end space-x-2 my-6"> 
  
 
        <p class="text-5xl text-black  font-bold">
           {location}
        </p>
        <span class="text-green-500 text-xl font-bold flex items-center">
            <svg width="20" fill="currentColor" height="20" class="h-3" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                
            </svg>
            {weather.sys.country}
        </span>
    </div>
    <div>
        <div class="flex items-center pb-2 mb-2 text-sm  justify-center border-b border-gray-200 ">
            <p class="font-bold">
                Current weather
            </p>
            <p class="mx-2">
            { weather.weather[0].description}
            </p>
        </div>
        <div class="flex items-center pb-2 mb-2 text-sm  justify-center border-b border-gray-200 ">
            <p class="font-bold">
                Temperature
            </p>
            <p class="mx-2">
            { weather.main.temp}
            </p>
        </div>
        <div class="flex items-center pb-2 mb-2 text-sm  justify-center border-b border-gray-200 ">
            <p class="font-bold">
                Feels like
            </p>
            <p class="mx-2">
            { weather.main.feels_like}
            </p>
        </div>
        <div class="flex items-center pb-2 mb-2 text-sm  justify-center border-b border-gray-200 ">
            <p class="font-bold">
                Pressure
            </p>
            <p class="mx-2">
            { weather.main.pressure}
            </p>
        </div>
        <div class="flex items-center pb-2 mb-2 text-sm  justify-center border-b border-gray-200 ">
            <p class="font-bold">
                Humidity
            </p>
            <p class="mx-2">
            { weather.main.humidity }
            </p>
        </div>
        
    </div>
</div>


)

}   
export default Weather;