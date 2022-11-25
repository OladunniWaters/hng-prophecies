import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import FebData from "../../PropheciesData/FebData"
import './FebProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function AprProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="FebProphecy">
         <div>
            <h1 className="FebHeader">FEBRUARY PROPHECIES</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {FebData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}