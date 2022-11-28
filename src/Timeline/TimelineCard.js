import './TimelineCard.css';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function TimelineCard({ Monthprophecy }) {
  const { id, link, month, message} = Monthprophecy
  
useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
  return (
    <div className="timeline-item" id={id}>
        <div className="timeline-item-content">
            <span className="tag">
                {}
            </span>
            <p>{month}</p>
            <span className="message">{message}</span>
            {link && (
                <a 
                    href={link.url}
                >
                    {link.text}
                </a>
            )}
            <span className="circle" data-aos="flip-up">
            Message Delivered
            </span>
        </div>
    </div>
    
    )

}