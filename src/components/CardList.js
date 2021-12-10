import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Card from "./Card";
import './Components.css';
import useChosenCards from "./hooks/useChosenCards";
import { getData } from '../actions/actions';

const CardList = (props) => {
    const { data, view, getData } = props;
    const [chosenCards, setChosenCards] = useChosenCards();

    useEffect(() => {
        getData();
    }, [])

    const switchView = () => {
        console.log(view);
        switch (view) {
            case 'custom': 
                return data.map((card, index) => {
                    if (chosenCards.includes(card.cardnumber)) {
                        return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
                    }
                    return null;
                });
            default: return data.map((card, index) => {
                console.log('all case');
                return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
            });
        }
    }

    console.log(props);
    return (
        <div className='card-list'>
            {switchView()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        data: state.data,
        view: state.view
    })
}


export default connect(mapStateToProps, { getData })(CardList);