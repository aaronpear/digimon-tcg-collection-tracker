import React from "react";
import './Components.css';

const Card = (props) => {
    const { card, chosenCards, setChosenCards } = props;

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

    return (
        <div className='card'>
            <img src={`https://images.digimoncard.io/images/cards/${card.cardnumber}.jpg`} alt={`${card.cardnumber}`} className='card-img' />
            <div className='card-info'>
                <p>{card.name}</p>
                <p>{card.cardnumber}</p>
                {
                chosenCards.includes(card.cardnumber) ?                 
                    <button onClick={handleChosenCardChange} value={true} >Remove From Collection List</button> :
                    <button onClick={handleChosenCardChange} value={false} >Add to Collection List</button>
                }
            </div>
        </div>
    )
}

export default Card;