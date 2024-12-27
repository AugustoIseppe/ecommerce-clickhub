'use server'

export default async function obterUsuariosClickHub() {
    //Adicionar um dalay de 1 segundo para simular uma chamada assíncrona
    await new Promise(resolve => setTimeout(resolve, 500))
    let data = await fetch('http://localhost:3000/users')
    let users = await data.json()
    console.log(users)
    return users
}
