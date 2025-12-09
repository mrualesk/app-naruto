import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {API_URL} from "../constans/api.js";

export default function Character() {
    const {id} = useParams();

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchCharacter = async () => {
        try {
            const respuesta = await fetch(`${API_URL}/characters/${id}`);
            const data = await respuesta.json();
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


    return (
        <div>
            <h1>Caracter</h1>
        </div>
    );
};
