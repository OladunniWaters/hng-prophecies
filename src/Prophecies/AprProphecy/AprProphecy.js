import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import AprilData from "../../PropheciesData/AprilData"
import './AprProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function AprProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="AprProphecy">
         <div>
            <h1 className="AprHeader">APRIL PROPHECIES</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {AprilData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}