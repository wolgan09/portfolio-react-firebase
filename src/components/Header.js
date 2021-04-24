import React, { useEffect, useState } from "react";
import './Header.css';
import $ from 'jquery';
import author from '../assets/images/author.jpg'


export default function Header(props) {

    

    useEffect(() => {
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
    <div>

      <div className="bg-gray-600 w-full lg:fixed p-2 z-10"  >
        <nav className="flex items-center p-8 flex-wrap ">
          <button
            className="text-white inline-flex p-3  lg:hidden ml-auto hover:text-white outline-none nav-toggler"
            data-target="#navigation">
            <i className="material-icons">menu</i>
          </button>
          <div
            className=" top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto lg:h-0 text-xl"
            id="navigation">
            <div
              className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col text-center lg:h-auto " >
              
              <a href="#about" 
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center hover:text-gray-800 font-bold active"
                >
                <span>About</span>
              </a>
              <a href="#skills"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center hover:text-gray-800 font-bold">
                <span>Skills</span>
              </a>
              <a href="#contact"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center hover:text-gray-800 font-bold">
                <span>Contact</span>
              </a>
              <a href="#projects"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center justify-center hover:text-gray-800 font-bold">
                <span>Projects</span>
              </a>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}