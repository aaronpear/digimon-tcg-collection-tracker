export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_SEARCH_TYPE =  "SET_SEARCH_TYPE";

export const setSearchValue = (searchValue) => {
    return ({ type: SET_SEARCH_VALUE, payload: searchValue });
}

export const setSearchType = (searchType) => {
    console.log('entered searchType action');
    return ({ type: SET_SEARCH_TYPE, payload: searchType })
}
