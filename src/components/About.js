import React from 'react'
import profilepic from '../assets/images/author.jpg'
import './About.css';

export default function About(props) {

  return (
    <>
      <section id="about" className="pt-24 bg-image">
        <div className="flex">
          <div className="flex-auto ">
            <img className="profile-pic p-3" src={profilepic} alt="Author" />
          </div>
          <div className="flex-auto">
            <h1 className="text-7xl text-center ">About Me</h1>
            <hr></hr>
            <h1 className="text-5xl line-1 anim-typewriter text-center"> I am a Front end developer</h1>       
          </div>
        </div>
      </section>
    </>
  )
}
