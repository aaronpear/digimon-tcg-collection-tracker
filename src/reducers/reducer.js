import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    TOGGLE_CUSTOM_VIEW
} from '../actions/actions.js';

const initialState = {
    data: [],
    error: '',
    isGetting: false,
    showCustomList: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_CUSTOM_VIEW:
            return {
                ...state,
                showCustomList: !state.showCustomList
            }
        case GET_DATA:
            console.log('getting data');
            return {
                ...state,
                isGetting: true,
                error: ''
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isGetting: false,
                error: ''
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;