import Products from "../model/Products";

export default async function fetchProductById(id: string): Promise<Products> {
    //Promise<Products> é o tipo de retorno da função, ou seja, ela retorna um objeto do tipo Products
    //Promise é uma operação assíncrona que pode ser resolvida no futuro
    // Aqui você pode fazer uma requisição para sua API ou servidor para obter os detalhes do produto
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  }