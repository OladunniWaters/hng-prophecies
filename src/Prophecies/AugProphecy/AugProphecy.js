import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import AugData from "../../PropheciesData/AugData"
import './AugProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function AugProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="AugProphecy">
         <div>
            <h1 className="AugHeader">AUGUST PROPHECIES</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {AugData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}