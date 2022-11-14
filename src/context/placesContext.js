import { createContext, useEffect } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { placesData } from "../data/placesData";

export const PlacesContext = createContext();

const PlacesContextProvider = ({ children }) => {
    const [places, setPlaces] = useLocalStorage("places")

    useEffect(() => {
        setPlaces(placesData)
    }, [setPlaces])

    return (
        <PlacesContext.Provider value={places}>
            { children }
        </PlacesContext.Provider>
    )
}

export default PlacesContextProvider