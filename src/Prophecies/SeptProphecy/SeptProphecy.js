import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import SeptData from "../../PropheciesData/SeptData"
import './SeptProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function SeptProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="SeptProphecy">
         <div>
            <h1 className="SeptHeader">SEPTEMBER MESSAGE</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {SeptData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}