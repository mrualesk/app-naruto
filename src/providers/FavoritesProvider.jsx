import React, {useEffect, useState} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";
import {ApiNaruto} from "../services/api-naruto.js";
import {FavoritesSp} from "../services/favoritesSp.js";
import {FavoritesLs} from "../services/favoritesLs.js";

export default function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = async (character) => {
        setFavorites([...favorites, character]);
        await FavoritesSp.insertFavoriteSp(character.id, character.name)
        await FavoritesLs.insertFavorite(character.id, character.name)
    }

    const removeFavorite = async (id) => {
        const favoritesFiltered = favorites.filter(character => character.id !== id)
        setFavorites(favoritesFiltered);
        await FavoritesSp.deleteFavoriteSp(id)
    }

    const isFavorite = (id) => {
        return favorites.some(character => character.id === id)
    }

    const fetchFavoritos = async () => {

        const idsFavorites = await FavoritesSp.fetchFavoritesSp()

        const promiseFavorites = idsFavorites.map(id => ApiNaruto.getCharacter(id))

        const favoritesFromSupabase = await Promise.all(promiseFavorites)

        setFavorites(favoritesFromSupabase)
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetchFavoritos()
        }
        fetchData()
    }, [])

    return (
        <FavoriteCharacterContext.Provider value={{
            favorites, addFavorite, removeFavorite, isFavorite
        }}>
            {children}
        </FavoriteCharacterContext.Provider>
    );
};
