import React, {useEffect, useState} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";
import supabase from "../services/supabase.js";

export default function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);


    const fetchFavorites = async () => {

        const test = await supabase.from("favorites").select();

        console.log({test})
    }

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

    useEffect(() => {
        fetchFavorites();
    }, [])

    return (
        <FavoriteCharacterContext.Provider value={{
            favorites, addFavorite, removeFavorite, isFavorite
        }}>
            {children}
        </FavoriteCharacterContext.Provider>
    );
};
