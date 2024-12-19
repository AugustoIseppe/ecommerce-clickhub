'use server'

export default async function obterCategoriesClickHub() {
    let data = await fetch('http://localhost:3000/categories')
    let posts = await data.json()
    console.log(posts)
    return posts
}
