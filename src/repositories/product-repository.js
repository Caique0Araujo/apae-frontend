const products = [
    { img: "", id: 1, title: "Produto 0", price: 0.50 },
    { img: "", id: 2, title: "Produto 1", price: 1.50 },
    { img: "", id: 3, title: "Produto 2", price: 2.50 },
    { img: "", id: 4, title: "Produto 3", price: 3.50 },
    { img: "", id: 5, title: "Produto 4", price: 4.50 },
    { img: "", id: 6, title: "Produto 5", price: 5.50 },
    { img: "", id: 7, title: "Produto 6", price: 6.50 }
];

const result = {
    statusCode: 200,
    data: products,
    msg: null
}

export async function getAllProducts() {
    return result;
}