export default async function obterPosts () {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await data.json()
    return posts
}