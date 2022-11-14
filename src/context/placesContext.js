import { useState, createContext, useEffect } from "react";
import { placesData } from "../data/placesData";

export const PlacesContext = createContext();

const PlacesContextProvider = ({ children }) => {
    const [places, setPlaces] = useState([])

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