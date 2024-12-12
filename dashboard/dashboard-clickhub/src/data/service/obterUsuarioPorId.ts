'use server'
// import { esperar } from './utils'
import usuarios from '../constants/usuarios'

export default async function obterUsuarioPorId(id: number) {
    // await esperar(3000)
    const usuario = usuarios.find((usuario) => usuario.id === id)
    return usuario
}