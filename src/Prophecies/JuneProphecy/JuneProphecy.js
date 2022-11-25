import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import JuneData from "../../PropheciesData/JuneData"
import './JuneProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function AprProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="JuneProphecy">
         <div>
            <h1 className="JuneHeader">JUNE PROPHECIES</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {JuneData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}