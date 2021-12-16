import React from "react";
import { connect } from 'react-redux';
import { changeView } from "../actions/viewActions";
import { setSearchValue, setSearchType } from "../actions/searchActions";
import './Components.css';

const Header = (props) => {
    const { searchValue } = props;
    const { changeView, setSearchValue, setSearchType } = props;

    const handleClick = (e) => {
        changeView(e.target.value);
    }

    const handleChange = (e) => {
        setSearchType(e.target.value);
    }

    return (
        <div className='header-container'>
            <header className='header'>
                <h1 className='title'>Digimon TCG Collection Tracker</h1>
                <nav>
                    <div className='search-bar'>
                        <label>Search by:</label>
                        <select name='search-type' onChange={handleChange}>
                            <option value='name'>Card Name</option>
                            <option value='cardnumber'>Set Number</option>
                        </select> 
                        <input type='text' name='search-value' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
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

const mapStateToProps = (state) => {
    return ({
        searchValue: state.search.searchValue
    })
}

export default connect(mapStateToProps, { changeView, setSearchValue, setSearchType })(Header);