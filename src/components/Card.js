import React from "react";
import './Components.css';
import styled from "styled-components";
import useQuantityOwned from "./hooks/useQuantityOwned";

const StyledImg = styled.img`
    /* opacity: 50%;

    :hover {
        opacity: 100%;
    } */
`

const Card = (props) => {
    const { card, chosenCards, setChosenCards } = props;
    const [quantityOwned, setQuantityOwned] = useQuantityOwned(card.cardnumber);

    const handleChosenCardChange = (e) => {       
        // if the targeted card is a Chosen card, this statement will filter out the
        // card from the chosenCards state
        if (e.target.value === 'true') {
            setChosenCards(chosenCards.filter((cardnum) => {
                return cardnum !== card.cardnumber;
            }))
        // if the targeted card doesn't exist in chosenCards, it will be added to chosenCards
        } else if (e.target.value === 'false') {
            setChosenCards([...chosenCards, card.cardnumber]);
        }
    }

    const handleAdd = () => {
        setQuantityOwned(quantityOwned + 1);
    }

    const handleSubtract = () => {
        if (quantityOwned > 0) {
        setQuantityOwned(quantityOwned - 1);
        }
    }

    return (
        <div className='card'>
            {
            quantityOwned === 0 ?
                <StyledImg src={`https://images.digimoncard.io/images/cards/${card.cardnumber}.jpg`} alt={`${card.cardnumber}`} className='card-img' /> :
                <img src={`https://images.digimoncard.io/images/cards/${card.cardnumber}.jpg`} alt={`${card.cardnumber}`} className='card-img' />
            }
            <div className='card-info'>
                <p>{card.name}</p>
                <p>{card.cardnumber}</p>
                <p>Quantity Owned: {quantityOwned}</p>
                <div className="button-container">
                    <button onClick={handleAdd}>Add Owned</button>
                    <button onClick={handleSubtract}>Subtract Owned</button>
                    {
                    !chosenCards.includes(card.cardnumber) ?                 
                        <button onClick={handleChosenCardChange} value={false} >Add to Custom List</button> :
                        <button onClick={handleChosenCardChange} value={true} >Remove From Custom List</button>
                    } 
                </div>
            </div>
        </div>
    )
}

export default Card;