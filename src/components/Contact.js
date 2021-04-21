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
        <section id="contact" className="min-h-screen">
            <h1 className="text-5xl">Contact</h1>
            <div className="flex">
                <div className="flex-1 md:hidden "></div>
                <div className="flex-1 md:flex md:flex-col ">
                    <div className="md:text-center md:justify-center">
                        <div className="contact-details">
                            <h2 className="md:text-center md:w-full">Contact Details</h2>
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
