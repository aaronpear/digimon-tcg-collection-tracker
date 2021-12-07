import useLocalStorage from "./useLocalStorage";

const useQuantityOwned = () => {
    const [quantityOwned, setQuantityOwned] = useLocalStorage('quantityOwned', 0);

    return([quantityOwned, setQuantityOwned]);
}

export default useQuantityOwned;