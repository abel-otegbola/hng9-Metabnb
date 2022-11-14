import { useState } from "react";

const returnInitialState = (storageKey) => {
    try {
        const items = window.localStorage.getItem(storageKey);
        return items ? JSON.parse(items) : [];
    }
    catch (error) {
        return [];
    }
}


export const useLocalStorage = (storageKey) => {
    const [storedValue, setStoredValue] = useState(
        returnInitialState(storageKey)
    )

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            window.localStorage.setItem(storageKey, JSON.stringify(valueToStore))

            setStoredValue(valueToStore);
        }
        catch (error) {
            console.log(error)
        }
    };

    return [storedValue, setValue]
}