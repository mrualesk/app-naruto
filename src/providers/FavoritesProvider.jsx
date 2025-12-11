import React, {useState} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";

export default function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (character) => {
        setFavorites([...favorites, character]);
    }

    const removeFavorite = (id) => {
        const favoritesFiltered = favorites.filter(character => character.id !== id)
        setFavorites(favoritesFiltered);
    }

    const isFavorite = (id) => {
        return favorites.some(character => character.id === id)
    }

    return (
        <FavoriteCharacterContext.Provider value={{
            favorites, addFavorite, removeFavorite, isFavorite
        }}>
            {children}
        </FavoriteCharacterContext.Provider>
    );
};
