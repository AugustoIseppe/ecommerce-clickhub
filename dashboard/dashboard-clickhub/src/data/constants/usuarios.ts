import Usuario from "../model/Usuario";


const usuarios: Usuario[] = [
    {
        id: 1,
        nome: 'João Silva',
        email: 'joao@teste.com',
        cpf: 12345678900,
        imagemUrl: 'https://cdn.pixabay.com/photo/2022/09/19/07/32/android-7464836_1280.jpg',
    },
    {
        id: 2,
        nome: 'Maria Santos',
        email: 'maria@teste.com',
        cpf: 98765432100,
        imagemUrl: 'https://cdn.pixabay.com/photo/2024/08/23/15/04/ai-generated-8992095_1280.png',
    },
    {
        id: 3,
        nome: 'Octavia Blake',
        email: 'OctaviaBlake@teste.com',
        cpf: 98765432100,
        imagemUrl: 'https://cdn.pixabay.com/photo/2022/10/12/22/22/woman-7517650_1280.jpg',
    },
    //https://cdn.pixabay.com/photo/2022/10/12/22/22/woman-7517650_1280.jpg
];

export default usuarios;