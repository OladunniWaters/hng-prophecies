import ProphecyCard from "../../ProphecyCard/ProphecyCard"
import Data from "./Data"
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
            <h1 className="JanHeader">JANUARY PROPHECY</h1>
         </div>
         
         <div data-aos="zoom-in" className="cards">
               {Data.map((prophecy)=>{
                 return (
                  <ProphecyCard
                     prophecy={prophecy}
                  />
               );})}
          </div>
    </div>
  );
}