import React, {useContext} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";
import CardDetailCharacter from "../components/CardDetailCharacter.jsx";

export default function Favorites() {

    const {favorites} = useContext(FavoriteCharacterContext)

    return (

        <div>
            <h1 className="text-2xl font-bold text-center mt-8 mb-8">Personajes Favoritos</h1>

            <ul className="flex flex-wrap justify-center gap-4">
                {
                    favorites.map((character, index) =>
                        <li key={index}>
                            <CardDetailCharacter character={character}/>
                        </li>
                    )
                }
            </ul>

        </div>
    );
};
