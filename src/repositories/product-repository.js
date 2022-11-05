const products = [
    { img: "", id: 1, title: "Produto 0", price: 0.50 },
    { img: "", id: 2, title: "Produto 1", price: 1.50 },
    { img: "", id: 3, title: "Produto 2", price: 2.50 },
    { img: "", id: 4, title: "Produto 3", price: 3.50 },
    { img: "", id: 5, title: "Produto 4", price: 4.50 },
    { img: "", id: 6, title: "Produto 5", price: 5.50 },
    { img: "", id: 7, title: "Produto 6", price: 6.50 }
];

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