
export class FavoritesLs {

    static async insertFavorite(id, name) {

        const favorites = [{
            id_character: id,
            name
        }]
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }

    static async deleteFavorite(id) {

    }

    static async fetchFavorites() {

    }
}
