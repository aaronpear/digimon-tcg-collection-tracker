import React from "react";
import { connect } from 'react-redux';
import { changeView } from "../actions/viewActions";
import { setSearchValue, setSearchType } from "../actions/searchActions";
import { Select, MenuItem, TextField, InputLabel } from "@mui/material";
import './Components.css';

const Header = (props) => {
    const { searchValue, searchType, view } = props;
    const { changeView, setSearchValue, setSearchType } = props;

    const handleViewChange = (e) => {
        changeView(e.target.value);
    }

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    }

    return (
        <div className='header-container'>
            <header className='header'>
                <div className='title'>
                    <h1>Digimon TCG Collection Tracker</h1>
                </div>
                <nav>
                    <div className="search-container">
                        <div className='search-type-selector'>
                            <InputLabel id="search-type-label">Search By</InputLabel>
                            <Select id='search-type-selector' name='search-type' labelId='search-type-label' defaultValue={searchType} onChange={handleSearchTypeChange}>
                                <MenuItem value='name'>Card Name</MenuItem>
                                <MenuItem value='cardnumber'>Set Number</MenuItem>
                            </Select>
                        </div>
                        <div className="search-bar">
                            <TextField 
                                id="filled-basic" 
                                label="Search" 
                                variant="filled" 
                                type='text' 
                                name='search-value' 
                                size='small'
                                value={searchValue} 
                                onChange={e => setSearchValue(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className='view-selector-container'>
                        <InputLabel id="view-label">Current View</InputLabel>
                        <Select name='view-selector' labelId='view-label' defaultValue={view} onChange={handleViewChange}>
                            <MenuItem value='Custom'>Custom</MenuItem>
                            <MenuItem value='All'>All</MenuItem>
                            <MenuItem value='Owned'>Owned</MenuItem>
                            <MenuItem value='Unowned'>Unowned</MenuItem>
                        </Select>
                    </div>
                </nav>
            </header>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        searchValue: state.search.searchValue,
        searchType: state.search.searchType,
        view: state.view.view
    })
}

export default connect(mapStateToProps, { changeView, setSearchValue, setSearchType })(Header);