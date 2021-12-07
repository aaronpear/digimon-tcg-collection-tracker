import React from "react";
import './Components.css';

const Card = (props) => {
    const { card } = props;

    return (
        <div className='card'>
            <img src={`https://images.digimoncard.io/images/cards/${card.cardnumber}.jpg`} alt={`${card.cardnumber}`} className='card-img' />
            <div className='card-info'>
                <p>{card.name}</p>
                <p>{card.cardnumber}</p>
            </div>
        </div>
    )
}

export default Card;