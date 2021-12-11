import React from "react";
import { connect } from 'react-redux';
import { changeView } from "../actions/viewActions";
import './Components.css';

const Header = (props) => {

    const handleClick = (e) => {
        props.changeView(e.target.value);
    }

    return (
        <div className='header-container'>
            <header className='header'>
                <h1 className='title'>Digimon TCG Collection Tracker</h1>
                <nav>
                    <div className='search-bar'>
                        <button>dropdown placeholder</button>
                        <input />
                    </div>
                    <div className='nav-buttons'>
                        <button onClick={handleClick} value=''>View All</button>
                        <button onClick={handleClick} value='custom'>Custom View</button>
                        <button onClick={handleClick} value='owned'>View Owned</button>
                        <button onClick={handleClick} value='unowned'>View Unowned</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default connect(null, { changeView })(Header);