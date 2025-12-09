import React from 'react';
import RowInfo from "../components/RowInfo.jsx";
import {useCharacter} from "../hooks/useCharacter.js";

export default function Character() {

    const {loading, character} = useCharacter()

    if (loading) return (
        <div>Cargando...</div>
    )

    if (!character) return (
        <div>No existe el personaje</div>
    )

    return (
        <>
            <div className="flex items-center justify-center mx-auto my-auto w-fit p-8 rounded-2xl border-2">
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
            </div>
        </>
    );
};
