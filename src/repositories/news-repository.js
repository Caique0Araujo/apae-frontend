import { API_URL } from '../../settings.js';

export async function getMostRecentNews() {
    const result = await fetch(`${API_URL}/news/recents}`);
    if (result.status != 200) {
        return [];
    }

    const json = await result.json();
    return json;
}

export async function getById(id) {
    const result = await fetch(`${API_URL}/news/byId/${id}`);
    if (result.status != 200) {
        // TODO: DEVE RETORNAR ERRO
        return null;
    }

    const json = await result.json();
    return json;
}