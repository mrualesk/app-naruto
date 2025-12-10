import React from 'react';
import ListCharacters from "../components/ListCharacters.jsx";
import PageContainer from "../components/PageContainer.jsx";

export default function Characters() {
    return (
        <PageContainer>
            <h1 className="text-2xl font-bold text-center mt-8">Listado de Personajes</h1>
            <ListCharacters/>
        </PageContainer>
    );
};
