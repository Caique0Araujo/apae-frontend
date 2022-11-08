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


export async function getById(id) {
    return {
        statusCode: 200,
        data: {
            "id_product": 1,
            "name": "Produto Rexona",
            "description": "Aqui vai aquela descrição top sobre o produto",
            "price": 5.85,
            "image_path": ""
        }
    };
}