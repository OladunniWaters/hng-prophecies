import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import DecData from "../../PropheciesData/DecData"
import './DecProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function DecProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="DecProphecy">
         <div>
            <h1 className="DecHeader">DECEMBER PROPHECIES</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {DecData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}