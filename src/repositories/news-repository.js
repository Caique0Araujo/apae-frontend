import { API_URL } from '../../settings.js';

export async function getMostRecentNews(start, end) {
    const result = await fetch(`${API_URL}/news/recents/${start}/${end}`);
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