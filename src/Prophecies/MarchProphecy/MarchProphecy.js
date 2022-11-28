import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import MarchData from "../../PropheciesData/MarchData"
import './MarchProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function MarchProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="MarchProphecy">
         <div>
            <h1 className="MarchHeader">MARCH MESSAGE</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {MarchData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}