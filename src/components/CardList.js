import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Card from "./Card";
import './Components.css';
import useChosenCards from "./hooks/useChosenCards";
import { getData } from '../actions/getActions';

const CardList = (props) => {
    const { data, view, searchType, searchValue, getData } = props;
    const [chosenCards, setChosenCards] = useChosenCards();

    useEffect(() => {
        getData();
    }, [getData])

    const switchView = () => {
        switch (view) {
            case 'Custom': 
                return data.map((card, index) => {
                    if (chosenCards.includes(card.cardnumber)) {
                        return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
                    }
                    return null;
                });
            case 'Owned':
                return data.map((card, index) => {
                    if (localStorage.getItem(`${card.cardnumber} Owned`) > 0) {
                        return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
                    }
                    return null;
                }) 
            case 'Unowned':
                return data.map((card, index) => {
                    if (localStorage.getItem(`${card.cardnumber} Owned`) === '0') {
                        return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
                    }
                    return null;
                }) 
            default: return data.map((card, index) => {
                return <Card key={index} card={card} chosenCards={chosenCards} setChosenCards={setChosenCards} />
            });
        }
    }

    const filterBySearch = (cardArray) => {
        if (!searchValue) {
            return cardArray;
        } else if (searchType === 'name') {
            return cardArray.filter((card) => {
                if (card) {
                    return card.props.card.name.toLowerCase().includes(searchValue);
                } else {
                    return card;
                }
            })
        } else if (searchType === 'cardnumber') {
            return cardArray.filter((card) => {
                if (card) {
                    return card.props.card.cardnumber.toLowerCase().includes(searchValue);
                } else {
                    return card;
                }
            })
        }
    }

    return (
        <div className='card-list'>
            {filterBySearch(switchView())}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        data: state.get.data,
        view: state.view.view,
        searchType: state.search.searchType,
        searchValue: state.search.searchValue
    })
}


export default connect(mapStateToProps, { getData })(CardList);