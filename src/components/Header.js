import React from "react";
import './Header.css';


export default function Header(props) {

  return (
    <div className="">
    <div className="flex fixed bg-transparent">
      <div className="fixed w-full flex-1 ">
        <div className="max-w-7xl">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1"> </div>
            <nav className="md:flex space-x-10 lg:flex-1">
              <div className="text-center items-list">
              <span type="button" className="cursor-pointer mr-10  inline-flex items-center text-base font-medium   " aria-expanded="false">
                  <span>About</span>
                </span>
                <span type="button" className=" cursor-pointer mr-10  inline-flex items-center text-base font-medium   " aria-expanded="false">
                  <span>Contact</span>
                </span>
                <span type="button" className="cursor-pointer mr-10  inline-flex items-center text-base font-medium   " aria-expanded="false">
                  <span>Skills</span>
                </span>
                <span type="button" className="cursor-pointer inline-flex items-center text-base font-medium " aria-expanded="false">
                  <span>Projects</span>
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>      
    </div>
    </div>
  );
}