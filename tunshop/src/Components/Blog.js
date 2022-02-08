import React, {Component, useState} from 'react';
import '../index.css';
import axios from "axios"; 

export default function Blog() {


    const [title, SetTitle] = useState("")
    const [body, SetBody] = useState("")

    function onInputchange(event, func){
        func(event.target.value)
        console.log(event.target.value)
    }
    

    function onSubmit () {
        axios.post('http://localhost:5050/postTest', {
            title,
            body
        })
          .then(function (response) {
            console.log(response, "hdhdhhdhdhdhd");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    


  return <div>
    <div>
  <div class="min-h-screen md:px-20 pt-6">
    <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
      <div class="space-y-4">
        <div>
          <label for="title" class="text-lx font-serif">Title:</label>
          <input name="title"
              type="text"
              value={title}
              onChange={(e) => onInputchange(e,SetTitle)}
          placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
          <textarea name="body"
              type="text"
              value={body}
              onChange={(e) => onInputchange(e,SetBody)}
          id="description" cols="30" rows="10" placeholder="whrite here.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
        </div>

        <button onClick={onSubmit}  class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
      </div>
    </div>
  </div>
</div>

  </div>;
}






