import React, { Component } from "react";
import "../index.css"
import { Link } from "react-router-dom"; 

export default class Navbar1 extends Component {

  constructor(props){
    super(props);
    this.state = {
        slideOpen : false,
       
    }
    this.handleClick = this.handleClick.bind(this);

  }

    handleClick() {
         this.setState({ slideOpen : !this.state.slideOpen })
      console.log("slideOpen" + !this.state.slideOpen)
     }

    render() {
        return (
             <div>
       
            <div    class  = "w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          
             
            
            <nav    class   = "flex-auto flex items-center justify-center p-2">
            <Link to="/"      class  = " tracking-widest text-gray-900 dark-mode:text-white focus:outline-none focus:shadow-outline px-8 py-20 mt-2 text-l font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline uppercase">Weather UI</Link>
      <Link to="/blog"      class   = " tracking-widest text-gray-900 dark-mode:text-white focus:outline-none focus:shadow-outline px-8 py-20 mt-2 text-l font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline" >Write a blog</Link>
      <p      class   = " tracking-widest text-gray-900 dark-mode:text-white focus:outline-none focus:shadow-outline px-8 py-20 mt-2 text-l font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline" >Blogs</p>
      <p      class   = " tracking-widest text-gray-900 dark-mode:text-white focus:outline-none focus:shadow-outline px-8 py-20 mt-2 text-l font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline" >Contact</p>
      <div    class   = "relative" x-data    = "{ open: true }">
      <button onClick ={this.handleClick} class = "tracking-widest text-gray-900 dark-mode:text-white focus:outline-none focus:shadow-outline px-8 py-20 mt-2 text-l font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
            <span>More</span>
          </button>
        </div>    
      </nav>
      </div>
      </div>
);
    }
}