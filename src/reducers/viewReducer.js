import {
    CHANGE_VIEW
} from '../actions/viewActions';

const initialState = {
    view: 'custom'
}

const viewReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.payload
            }
        default:
            return state;
    }
}

export default viewReducer;