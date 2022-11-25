import './ProphecyCard.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export default function ProphecyCard( { prophecies }) {
  const { id, prophecy , pastor,  image} = prophecies 
  
  return (
    <div className="ProphecyCard" id={id}>
         <div className="pastorProphecy">
             <RiDoubleQuotesL className="quoteIcon"/>{prophecy} <RiDoubleQuotesR className="quoteIcon" />
         </div>
         
         <div className="span"></div>
         <div  className="CardInfo">
             <img src={image} alt={pastor} className="pastorImage"/>
             <p className="pastorName">{pastor}</p>
         </div>
    </div>
  );
}
