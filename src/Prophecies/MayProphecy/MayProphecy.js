import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import MayData from "../../PropheciesData/MayData"
import './MayProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function MayProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="MayProphecy">
         <div>
            <h1 className="MayHeader">MAY MESSAGE</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {MayData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}