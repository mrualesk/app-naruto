import React, {useEffect, useState} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";
import supabase from "../services/supabase.js";

export default function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);


    const fetchFavorites = async () => {

        const test = await supabase.from("favorites").select();

        console.log({test})
    }

    const insertFavoritoToSupabase = async (id, name) => {

        const {error} = await supabase
            .from('favorites')
            .insert([
                {
                    id_character: id,
                    name,
                }
            ])
        if (error) {
            console.error('Error inserting user:', error)
            return
        }
    }

    const deleteFavoriteFromSupabase = async (id) => {
        const {error} = await supabase
            .from('favorites')
            .delete()
            .eq('id_character', id)

        if (error) {
            console.error('Error deleting user:', error)
        }
    }

    const addFavorite = async (character) => {
        setFavorites([...favorites, character]);
        await insertFavoritoToSupabase(character.id, character.name)
    }

    const removeFavorite = async (id) => {
        const favoritesFiltered = favorites.filter(character => character.id !== id)
        setFavorites(favoritesFiltered);
        await deleteFavoriteFromSupabase(id)
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
