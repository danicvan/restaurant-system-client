import React from "react";
import { CardData } from "../CardData/CarData";

function Card() {
    return (
        <>
            {CardData.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <img src={item.image} alt={item.title} />
                        <span>{item.title}</span>
                    </div>
                );
            })}
        </>
    );
}

export default Card;
