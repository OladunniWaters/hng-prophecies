import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import JanData from "../../PropheciesData/JanData"
import './JanProphecy.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function JanProphecy() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  
  return (
    <div className="JanProphecy">
         <div>
            <h1 className="JanHeader">JANUARY MESSAGE</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {JanData.map((prophecies)=>{
                 return (
                  <ProphecyCard
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  );
}