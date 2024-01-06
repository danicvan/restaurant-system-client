import { CardData } from "../CardData/CarData";
import { useState } from "react";

import Item from "../Item/Item";
import Menu from "../../Pages/Menu/Menu";
import { useNavigate } from "react-router-dom";

function Card() {
    
    const [showItem, setShowItem] = useState(false);
    const navigate = useNavigate();
    const handleCardClick = () => {
        setShowItem(true);
    };

    return (
        <>
        {showItem ? (
            navigate('/menu')
        ) : (
            <div className={`cards-container ${showItem? "hidden" : ""}`}>
                {CardData.map((item, index) => (
                    <div key={index} className="card" onClick={handleCardClick}>
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