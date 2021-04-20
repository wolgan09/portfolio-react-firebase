import React from 'react'

export default function Contact(props) {
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
        <section id="contact">
            <h1 className="text-7xl">Contact</h1>
            <div className="flex">
                <div className="flex-1"></div>
                <div className="flex-1">
                    <div className="">
                        <div className="contact-details">
                            <h2>Contact Details</h2>
                            <p className="">
                                <span>{name}</span>
                                <p>{bio}</p>
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
                    </div>
                </div>
            </div>
        </section>
    )
}
