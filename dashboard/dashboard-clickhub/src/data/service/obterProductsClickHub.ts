'use server'

export default async function obterProductsClickHub() {
    let data = await fetch('http://localhost:3000/products')
    let posts = await data.json()
    console.log(posts)
    return posts
}
