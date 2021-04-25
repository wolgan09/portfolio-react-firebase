import React from 'react'
import profilepic from '../assets/images/author.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './About.css';

export default function About(props) {

  return (
    <>
      <section id="about" className="lg:pt-24 min-h-screen bg-gray-600">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
        </div>
        <div className="px-10 mx-auto rounded-xl   lg:flex">
          <div className="rounded-lg shadow-2xl md:flex-shrink-0 lg:w-1/4 lg:ml-20">
            <img className="rounded-xl md:h-92 lg:h-92  lg:w-full md:object-cover md:w-48" src={profilepic}></img>
          </div>

          {/* <div className="lg:flex-1/2 "></div> */}
          <div className="  md:pt-4 lg:flex-1 text-center md:flex md:flex-col md:justify-center">
            <h2 className="text-gray-200 text-5xl md:text-4xl lg:text-6xl font-bold lg:mb-4 ">
              About Me
          </h2>
            <hr></hr>
            <p className="md:text-2xl lg:text-4xl text-gray-400 text-center"> I am a Web developer</p>
            <div className="text-white mt-10">
            <span className="pr-5"> <GitHub  fontSize="large"  /></span>
            <span > <LinkedInIcon style={{ fontSize: 40 }} /></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
