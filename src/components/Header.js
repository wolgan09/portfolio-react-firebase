import React, { useEffect, useState } from "react";
import './Header.css';
import $ from 'jquery';
import author from '../assets/images/author.jpg'


export default function Header(props) {

    

    useEffect(() => {
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      $(".nav-toggler").each(function (_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
          $(target).animate({
            height: "toggle",
          });
        });
      });
    }, [])

    const toggleClass = () => {

    }
  

  return (
     <div className="lg:bg-transparent w-full lg:fixed p-2 z-10 header " >
        <nav className="flex items-center p-8 flex-wrap ">
          <button
            className=" inline-flex p-3  lg:hidden ml-auto outline-none nav-toggler"
            data-target="#navigation">
            <i className="material-icons text-white">menu</i>
          </button>
          <div
            className=" top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto lg:h-0 text-xl "
            id="navigation">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col text-center lg:h-auto text-white" >
              
              <a href="#about" 
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center font-bold active "
                >
                <span>About</span>
              </a>
              <a href="#skills"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center font-bold">
                <span>Skills</span>
              </a>
              <a href="#contact"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center font-bold">
                <span>Contact</span>
              </a>
              <a href="#projects"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center font-bold">
                <span>Projects</span>
              </a>

            </div>
          </div>
        </nav>
      </div>
  );
}