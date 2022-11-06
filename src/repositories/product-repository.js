export async function getAllProducts() {
    const result = await fetch('http://localhost:3333/products/all');
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