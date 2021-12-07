import useLocalStorage from "./useLocalStorage";

const useChosenCards = () => {
    const [chosenCards, setChosenCards] = useLocalStorage('chosenCards', []);

    return([chosenCards, setChosenCards]);
}

export default useChosenCards;