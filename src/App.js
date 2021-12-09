import './App.css';
import React from 'react';

import Header from './components/Header';
import CardList from './components/CardList';



function App() {
  // useEffect(() => {
  //   axios.get('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc')
  //     .then(response => {
  //       setCards(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  // }, [])

  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
