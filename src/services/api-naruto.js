import {API_URL} from "../constans/api.js";

export class ApiNaruto {

    static async getCharacter(id) {
        const respuesta = await fetch(`${API_URL}/characters/${id}`);
        return await respuesta.json();
    }

}
