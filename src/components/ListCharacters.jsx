import React from 'react';
import CardCharacter from "./CardCharacter.jsx";
import {useCharacters} from "../hooks/useCharacters.js";
import {Link} from "react-router";

export default function ListCharacters() {

    const {loading, characters} = useCharacters();

    if (loading && characters.length === 0) return (
        <div>
            <p>Cargando...</p>
        </div>
    )

    return (
        <div className="px-8 my-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {
                    characters.map(character => (
                        <Link to={`/detalle/${character.id}`} key={character.id}>
                            <CardCharacter character={character}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};
