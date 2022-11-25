import './ProphecyCard.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export default function ProphecyCard( { prophecy }) {
  const { id, pastorProphecy , pastorName,  pastorImage} = prophecy 
  
  return (
    <div className="ProphecyCard" id={id}>
         <div className="pastorProphecy">
             <RiDoubleQuotesL className="quoteIcon"/>{pastorProphecy} <RiDoubleQuotesR className="quoteIcon" />
         </div>
         
         <div className="span"></div>
         <div  className="CardInfo">
             <img src={pastorImage} alt={pastorName} className="pastorImage"/>
             <p className="pastorName">{pastorName}</p>
         </div>
    </div>
  );
}
