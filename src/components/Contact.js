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
            <div className="pt-20">
            <h1 className="text-5xl text-center text-white font-bold">Contact</h1>
            <form className="lg:w-1/2 md:w-full p-5 mx-auto mt-5 text-white">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white lg:text-lg md:text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                         </label>
                        <input className="appearance-none block w-full bg-gray-200   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="">
                        </input>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide   lg:text-lg md:text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                         </label>
                        <input className="appearance-none block w-full bg-gray-200   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" >
                        </input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide   lg:text-lg md:lg:text-lg md:text-xs font-bold mb-2" for="grid-password">
                            E-mail
                      </label>
                        <input className="appearance-none block w-full bg-gray-200   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
                        </input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6"> 
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide   lg:text-lg md:text-xs font-bold mb-2" for="grid-password">
                            Message
                      </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button className="shadow bg-green-300 hover:bg-teal-400 focus:shadow-outline focus:outline-none  py-4  px-6 rounded" type="button">
                            Send
                     </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
            </div>
        </section>
    )
}
