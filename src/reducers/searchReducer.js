import {
    SET_SEARCH_VALUE,
    SET_SEARCH_TYPE
} from '../actions/searchActions';


const initialState = {
    searchValue: '',
    searchType: 'name'
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.toLowerCase()
            }
        case SET_SEARCH_TYPE:
            return {
                ...state,
                searchType: action.payload
            }
        default:
            return state;
    }

}

export default searchReducer;