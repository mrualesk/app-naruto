import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {API_URL} from "../constans/api.js";
import {ApiNaruto} from "../services/api-naruto.js";

export const useCharacter = () => {

    const {id} = useParams();

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchCharacter = async () => {
        try {
            const data = await ApiNaruto.getCharacter(id);
            setCharacter(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        fetchCharacter()

    }, [])

    return {
        loading,
        character
    }

}
