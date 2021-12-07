import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import CardList from './components/CardList';



function App() {
  const [cards, setCards] = useState([]);
  const [showChosenCards, setShowChosenCards] = useState('false');

  useEffect(() => {
    axios.get('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className="App">
      <Header showChosenCards={showChosenCards} setShowChosenCards={setShowChosenCards} />
      <CardList cards={cards} showChosenCards={showChosenCards} />
    </div>
  );
}

export default App;
