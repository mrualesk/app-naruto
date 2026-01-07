import {useEffect, useState} from "react";
import {ApiNaruto} from "../services/api-naruto.js";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacters = async () => {
        try {
            const data = await ApiNaruto.getCharacters();
            setCharacters(data)
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
