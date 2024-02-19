import { CardData } from "../CardData/CarData";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Card() {
    
    const [showItem, setShowItem] = useState(false);
    const navigate = useNavigate();
    const handleCardClick = (item) => {
        setCardDataCode(item.code);
        setShowItem(true);
    };
    const [cardDataCode, setCardDataCode] = useState('');
    const url = showItem ? `/menu/${cardDataCode}` : `/menu`

    return (
        <>
        {showItem ? (
            navigate(url)
        ) : (
            <div className={`cards-container ${showItem? "hidden" : ""}`}>
                {CardData.map((item, index) => (
                    <div key={index} className="card" onClick={handleCardClick(item)}>
                        <img src={item.image} alt={item.title} />
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
            )}
        </>
    );
}

export default Card;