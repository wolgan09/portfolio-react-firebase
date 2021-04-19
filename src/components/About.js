import React from 'react'
import profilepic from '../assets/images/author.jpg'
import './About.css';

export default function About(props) {
  if (!props.data) return null;
  const name = props.data.name;
  // const profilepic = "assets/images/author.jpg" ;
  const bio = props.data.bio;
  const street = props.data.address.street;
  const city = props.data.address.city;
  const state = props.data.address.state;
  const zip = props.data.address.zip;
  const phone = props.data.phone;
  const email = props.data.email;
  const resumeDownload = props.data.resumedownload;
  return (
    <div>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Author" />
          </div>
          <div className="nine columns main-col">
            <h1>About Me</h1>
            <h1 className="line-1 anim-typewriter"> I am a Front end developer</h1>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
