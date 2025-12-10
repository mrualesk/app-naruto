import React, {useContext} from 'react';
import {Link} from "react-router";
import {FavoriteCharacterContext} from "../context/favoriteCharacterContext.js";

export default function Header() {
    const {favorites} = useContext(FavoriteCharacterContext)

    return (
        <header className="flex flex-row justify-between items-center mx-8">
            <Link to="/">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT1D2mxf904n7q3Cccpf4WTl5LYVuuE0lnQ&s"
                    alt="Logo Naruto"
                    className="w-30 h-30"
                />
            </Link>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer transition-all">
                Personajes Favoritos {favorites.length}
            </button>
        </header>
    );
};
