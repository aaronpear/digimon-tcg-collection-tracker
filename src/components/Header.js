import React from "react";
import { connect } from 'react-redux';
import { toggleCustomView } from "../actions/actions";
import './Components.css';

const Header = (props) => {

    const handleClick = () => {
        props.toggleCustomView();
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
                        <button onClick={handleClick}>Toggle Custom View</button>
                        <button>Function 2</button>
                        <button>Function 3</button>
                        <button>Function 4</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default connect(null, { toggleCustomView })(Header);