import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Card from "./Card";
import './Components.css';
import useChosenCards from "./hooks/useChosenCards";
import { getData } from '../actions/actions';

const CardList = (props) => {
    const { data, showCustomList, getData } = props;

    useEffect(() => {
        getData();
    }, [])


    const [chosenCards, setChosenCards] = useChosenCards();

    console.log(props);
    return (
        <div className='card-list'>
            {showCustomList ? 
            data.map((card, index) => {
                if (chosenCards.includes(card.cardnumber)) {
                    return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
                }
                return null;
            }) : 
            data.map((card, index) => {
                return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        data: state.data,
        showCustomList: state.showCustomList
    })
}


export default connect(mapStateToProps, { getData })(CardList);