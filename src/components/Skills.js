import React from 'react'
import '../App.css'

export default function Skills(props) {

    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    const skills = props.data.skills.map(skills => {
        const backgroundColor = getRandomColor();
        const className = "" + skills.name.toLowerCase();
        const width = skills.level;      

        return (
          // <li key={skills.name}>
          //   <span style={{ width, backgroundColor }} className={className}></span>
          //   <em>{skills.name}</em>
          // </li>
          <div className="relative pt-1">
            <div className="overflow-hidden h-10 mb-4 text-xs flex rounded bg-gray-200 ">
              <div style={{width:width}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500">
                <span className="text-lg lg:text-xl">{skills.name}</span>
              </div>
            </div>
          </div>
        );
      });

    return (
        <section id="skills" className="flex">
            <div className="bars w-1/2 mx-auto">
              {skills}
            </div>        
        </section>
    )
}
