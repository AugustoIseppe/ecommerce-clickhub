'use server'
// import { esperar } from './utils'
import usuarios from '../constants/usuarios'

export default async function obterUsuarios() {
    // await esperar(2000)
    return usuarios
}