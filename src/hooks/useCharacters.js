import {useEffect, useState} from "react";
import {API_URL} from "../constans/api.js";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(`${API_URL}/characters`);
            const data = await response.json();
            setCharacters(data.characters)
        } catch (e) {
            console.error(e);
            console.log("Error al traer los personajes");
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchCharacters();
    }, []);

    return {
        loading,
        characters
    }
}
