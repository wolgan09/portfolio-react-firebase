import React from 'react'
import Cards from '../widgets/Cards'

export default function Portfolio() {
    const cards = [1, 2]
    return (
            <section id="projects" className="min-h-screen">
                <div className="p-20 ">
            <h2 className="text-5xl text-center font-bold">Projects</h2>
                <div className="flex mx:auto md:flex-wrap">
                    {cards.map(() => {
                        const elem = <div className="w-1/2"> <div className="lg:flex-grow pr-5 mb-20 card-items"><Cards /> </div > <div className="flex-auto pr-5 card-items"><Cards /></div> </div>                       
                        return elem; 
                    })}
                </div>
                </div>
            </section>
    )
}
