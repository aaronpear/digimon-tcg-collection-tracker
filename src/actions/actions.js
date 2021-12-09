import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";
export const TOGGLE_CUSTOM_VIEW = "TOGGLE_CUSTOM_VIEW";

export const getData = () => dispatch => {
    console.log('starting getData');
    dispatch({ type: GET_DATA });
    axios
      .get('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc')
      .then(res =>
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: GET_DATA_FAIL, payload: err }));
  };

export const toggleCustomView = () => {
    return ({ type: TOGGLE_CUSTOM_VIEW });
}
