import React, {useEffect, useState} from 'react';
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";
import supabase from "../services/supabase.js";
import {ApiNaruto} from "../services/api-naruto.js";

export default function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const insertFavoritoToSupabase = async (id, name) => {

        const {data, error} = await supabase
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

    const fetchFavoritos = async () => {

        const {data, error} = await supabase
            .from('favorites') // Nombre de la tabla
            .select('id_character')      // Seleccionar todas las columnas

        // Manejar errores
        if (error) {
            console.error('Error al obtener los datos:', error)
            setFavorites([])
            return
        }

        const idsFavorites = data.map(spItem => spItem.id_character)

        const promiseFavorites = idsFavorites.map(id => ApiNaruto.getCharacter(id))

        const favoritesFromSupabase = await Promise.all(promiseFavorites)

        setFavorites(favoritesFromSupabase)
    }

    useEffect(() => {
        fetchFavoritos()
    }, [])

    return (
        <FavoriteCharacterContext.Provider value={{
            favorites, addFavorite, removeFavorite, isFavorite
        }}>
            {children}
        </FavoriteCharacterContext.Provider>
    );
};
