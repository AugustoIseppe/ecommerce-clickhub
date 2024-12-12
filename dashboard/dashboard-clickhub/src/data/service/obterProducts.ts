'use server'

export default async function obterProducts () {
    let data = await fetch('https://dummyjson.com/products')
    let posts = await data.json()
    return posts
}

