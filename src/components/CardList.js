import React from "react";
import Card from "./Card";
import './Components.css';
import useChosenCards from "./hooks/useChosenCards";

const CardList = (props) => {
    const { cards, showChosenCards } = props;

    const [chosenCards, setChosenCards] = useChosenCards();

    return (
        <div className='card-list'>
            {showChosenCards ? 
            cards.map((card, index) => {
                if (chosenCards.includes(card.cardnumber)) {
                    return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
                }
                return null;
            }) : 
            cards.map((card, index) => {
                return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
            })}
        </div>
    )
}

export default CardList;