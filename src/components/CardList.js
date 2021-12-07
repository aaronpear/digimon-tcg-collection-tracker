import React from "react";
import Card from "./Card";
import './Components.css';

const CardList = (props) => {
    const { cards } = props;

    return (
        <div className='card-list'>
            {cards.map((card, index) => {
                return <Card key={index} card={card} />;
            })}
        </div>
    )
}

export default CardList;