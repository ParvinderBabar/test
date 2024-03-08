"use client"
// import Image from "next/image";
import { useState } from "react"; 
import alienPlanets from "../lib/alien-planets.jsx";
import Divider from "@/component/Divider.jsx";
import memeImage from "../../public/meme.webp";


export default function Home() {
  const [planets, setPlanets] = useState(alienPlanets);

  return (
    <div>
      {<p>1</p>}
      <Divider />

      {<p>2</p>}
       <div id="square">
        {
          
        }
        </div>
      <Divider />
       
    
      
      {<p>3</p>}
       {/* <Image src={memeImage} alt="Meme" /> */}

      {<div id="image-meme">
         <img src="/meme.webp" alt="img" />
     </div>}
      <Divider/>
      <h3 > Alien planets</h3>
      
    <div id="main">
  
      {
        planets.map((planet) => {
          return (<div >
            <div key={planet.id} className="planet-container">
              <h2> {planet.emoji}</h2>
            
            
    
              <h6>{planet.name}</h6>
              <p>{planet.name} is
                {planet.distanceFromEarth} miles from earth.
                {planet.name} is believed to
                 {planet.hasLife ? " has life." : " have no life."}
                The atmosphere of {planet.name}
                is {planet.atmosphere}.
              </p>
            </div>
          </div>);
          // Zorbon is 320 light years miles from earth.Zorbon is believed to have life. 
          // The atmosphere of Zorbon is nitrogen - oxygen.
           
        })}
    </div>
      </div >);

}
