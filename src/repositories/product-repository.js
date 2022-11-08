import { API_URL } from '../../settings.js';

export async function getAllProducts() {
    const result = await fetch(`${API_URL}/products/all`);
    if (result.status != 200) {
        return {
            statusCode: result.status,
            msg: 'Um erro aconteceu'
        };
    }

    const json = await result.json();
    return {
        statusCode: result.status,
        data: json,
    };
}