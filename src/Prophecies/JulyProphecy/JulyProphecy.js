import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import JulyData from "../../PropheciesData/JulyData"
import './JulyProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function JulyProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="JulyProphecy">
         <div>
            <h1 className="JulyHeader">JULY MESSAGE</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {JulyData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}