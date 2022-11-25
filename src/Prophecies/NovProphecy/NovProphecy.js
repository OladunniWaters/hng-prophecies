import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import NovData from "../../PropheciesData/NovData"
import './NovProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function NovProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="NovProphecy">
         <div>
            <h1 className="NovHeader">NOVEMBER PROPHECIES</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {NovData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}