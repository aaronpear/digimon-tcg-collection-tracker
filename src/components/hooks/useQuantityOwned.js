import useLocalStorage from "./useLocalStorage";

const useQuantityOwned = (cardnum) => {
    const [quantityOwned, setQuantityOwned] = useLocalStorage(`${cardnum} Owned`, 0);

    return([quantityOwned, setQuantityOwned]);
}

export default useQuantityOwned;