import supabase from "./supabase.js";

export class FavoritesSp {

    static async insertFavoriteSp(id, name) {

        const {error} = await supabase
            .from('favorites')
            .insert([
                {
                    id_character: id,
                    name,
                }
            ])

        return !error;
    }

    static async deleteFavoriteSp(id) {

        const {error} = await supabase
            .from('favorites')
            .delete()
            .eq('id_character', id)

        return !error;
    }

    static async fetchFavoritesSp() {
        const {data, error} = await supabase
            .from('favorites') // Nombre de la tabla
            .select('id_character')      // Seleccionar todas las columnas

        if (error) {
            return []
        }
        return data.map(spItem => spItem.id_character)
    }
}
