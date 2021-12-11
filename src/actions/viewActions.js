export const CHANGE_VIEW = "CHANGE_VIEW";

export const changeView = (view) => {
    return ({ type: CHANGE_VIEW, payload: view });
}
