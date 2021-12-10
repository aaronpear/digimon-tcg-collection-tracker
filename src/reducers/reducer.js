import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    CHANGE_VIEW
} from '../actions/actions.js';

const initialState = {
    data: [],
    error: '',
    isGetting: false,
    view: 'custom'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.payload
            }
        case GET_DATA:
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