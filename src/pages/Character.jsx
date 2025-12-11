import React from 'react';
import {useCharacter} from "../hooks/useCharacter.js";
import PageContainer from "../components/PageContainer.jsx";
import CardDetailCharacter from "../components/CardDetailCharacter.jsx";

export default function Character() {

    const {loading, character} = useCharacter()

    if (loading) return (
        <div>Cargando...</div>
    )

    if (!character) return (
        <div>No existe el personaje</div>
    )


    return (
        <PageContainer>
            <CardDetailCharacter character={character}/>
        </PageContainer>
    );
};
