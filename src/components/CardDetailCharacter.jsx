import React, {useContext} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";
import RowInfo from "./RowInfo.jsx";

export default function CardDetailCharacter({character}) {

    const {addFavorite, removeFavorite, isFavorite} = useContext(FavoriteCharacterContext)

    const isCurrentCharacterFavorite = character && isFavorite(character.id);

    return (
        <div
            className="flex items-center justify-center mx-auto my-auto w-fit p-8 rounded-2xl shadow-2xl relative bg-gray-300">
            <div>
                {
                    character.name === "Jiraiya"
                        ? <img className="w-[280px] h-52 rounded-2xl"
                               src="https://alfabetajuega.com/hero/2020/08/Jiraiya.jpg?width=1200&aspect_ratio=16:9"
                               alt={character.name}/>
                        :
                        <img className="w-[280px] h-52 rounded-2xl" src={character.images[0]} alt={character.name}/>
                }
            </div>
            <div>
                <RowInfo label="Personaje" value={character.name}/>
                <RowInfo label="Sexo" value={character.personal?.sex}/>
                <RowInfo label="Padre" value={character.family?.father}/>
                <RowInfo label="Madre" value={character.family?.mother}/>
                <RowInfo label="Equipo" value={character.personal?.team}/>
                <RowInfo label="Clan" value={character.personal?.clan}/>
            </div>
            <div className="absolute top-4 right-4">
                {
                    isCurrentCharacterFavorite
                        ? (
                            <button onClick={() => removeFavorite(character.id)}>
                                <img src="/star-yelow.svg" alt="Icono No-Favorito" width="30" height="30"/>
                            </button>
                        )
                        : (
                            <button onClick={() => addFavorite(character)}>
                                <img src="/star-white.svg" alt="Icono No-Favorito" width="30" height="30"/>
                            </button>
                        )
                }
            </div>
        </div>
    );
};

