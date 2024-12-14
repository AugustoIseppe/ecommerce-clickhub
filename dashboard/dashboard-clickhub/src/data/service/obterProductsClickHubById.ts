'use server'

export default async function obterProductsClickHubById(id: string) {
    let data = await fetch(`http://localhost:3000/products/${id}`)
    let posts = await data.json()
    console.log(posts)
    return posts
}
