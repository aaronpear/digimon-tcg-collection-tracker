import React from "react";
import './Components.css';

const Header = (props) => {
    const { showChosenCards, setShowChosenCards } = props;

    const handleClick = () => {
        setShowChosenCards(!showChosenCards);
    }

    return (
        <div className='header-container'>
            <header className='header'>
                <h1 className='title'>Digimon TCG Checklist</h1>
                <nav>
                    <div className='search-bar'>
                        <button>dropdown placeholder</button>
                        <input />
                    </div>
                    <div className='nav-buttons'>
                        <button onClick={handleClick}>Toggle Chosen Card View</button>
                        <button>Function 2</button>
                        <button>Function 3</button>
                        <button>Function 4</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;