import './TimelineCard.css';

export default function TimelineCard({ Monthprophecy }) {
  const { id, link, month} = Monthprophecy
  
  return (
    
    <div className="timeline-item" id={id}>
        <div className="timeline-item-content">
            <span className="tag">
                {}
            </span>
            <p>{month}</p>
            {link && (
                <a 
                    href={link.url}
                >
                    {link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
    
    )

}