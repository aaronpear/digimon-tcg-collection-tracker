import React from "react";
import './Components.css';

import useQuantityOwned from "./hooks/useQuantityOwned";

const Card = (props) => {
    const { card, chosenCards, setChosenCards } = props;
    const [quantityOwned, setQuantityOwned] = useQuantityOwned();

    const handleChosenCardChange = (e) => {
        const tempCards = chosenCards;

        if (e.target.value === 'true') {
            setChosenCards(tempCards.filter((cardnum) => {
                return cardnum !== card.cardnumber;
            }))
        } else if (e.target.value === 'false') {
            tempCards.push(card.cardnumber) 
            setChosenCards(tempCards);
        }
    }

    const handleAdd = () => {
        setQuantityOwned(quantityOwned + 1);
    }

    const handleSubtract = () => {
        if (quantityOwned > 0) {
        setQuantityOwned(quantityOwned - 1)
        }
    }


    return (
        <div className='card'>
            <img src={`https://images.digimoncard.io/images/cards/${card.cardnumber}.jpg`} alt={`${card.cardnumber}`} className='card-img' />
            <div className='card-info'>
                <p>{card.name}</p>
                <p>{card.cardnumber}</p>
                <p>Quantity Owned: {quantityOwned}</p>
                <button onClick={handleAdd}>Add Owned</button>
                <button onClick={handleSubtract}>Subtract Owned</button>
                {
                !chosenCards.includes(card.cardnumber) ?                 
                    <button onClick={handleChosenCardChange} value={false} >Add to Collection List</button> :
                    <button onClick={handleChosenCardChange} value={true} >Remove From Collection List</button>
                } 
            </div>
        </div>
    )
}

export default Card;