import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import OctData from "../../PropheciesData/Octdata"
import './OctProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function OctProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="OctProphecy">
         <div>
            <h1 className="OctHeader">OCTOBER MESSAGE</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {OctData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}