import React from 'react';
import {API_URL} from "../constans/api.js";

export default function ListCharacters() {

    const fetchCharacters = async () => {
        const response = await fetch(`${API_URL}/characters`)
    }

    return (
        <div>

        </div>
    );
};
