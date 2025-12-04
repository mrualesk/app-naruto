import React from 'react';
import ListCharacters from "../components/ListCharacters.jsx";

export default function Characters() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-8">Listado de Personajes</h1>
            <ListCharacters/>
        </div>
    );
};
