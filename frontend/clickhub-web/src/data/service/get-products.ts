'use server'

export default async function getProducts() {
    try {
        let response = await fetch("http://localhost:3000/products");
        let products = await response.json();
        return products;
    } catch (error) {
        console.error(error);
        return [];
    }
}