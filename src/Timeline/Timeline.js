import TimelineData from "../Timeline/TimelineData"
import TimelineCard from "../Timeline/TimelineCard"

import './Timeline.css';

export default function Timeline() {
  return (
      <div className="Timeline">
         <div>
            <h1 className="TimelineHeader">PROPHECIES</h1>
         </div>
         
         <div className="timeline-container">
               {TimelineData.map((Monthprophecy)=>{
                 return (
                  <TimelineCard
                     Monthprophecy={Monthprophecy}
                  />
               );})}
          </div>
    </div>
  );
}