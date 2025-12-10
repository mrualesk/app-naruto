import React, {useState} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";

export default function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (character) => {
    }

    const removeFavorite = (id) => {
    }

    return (
        <FavoriteCharacterContext.Provider value={{
            favorites, addFavorite, removeFavorite
        }}>
            {children}
        </FavoriteCharacterContext.Provider>
    );
};
