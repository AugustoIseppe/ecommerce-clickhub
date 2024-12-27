import { v4 as uuidv4 } from 'uuid';
import Usuario from '../model/Usuario';

const usuarios: Usuario[] = [
    {
        id: uuidv4(),
        nome: 'John Smith',
        email: 'john.smith@example.com',
        senha: 'password123'
    },
    {
        id: uuidv4(),
        nome: 'Emily Johnson',
        email: 'emily.johnson@example.com',
        senha: 'password456'
    },
    {
        id: uuidv4(),
        nome: 'Michael Brown',
        email: 'michael.brown@example.com',
        senha: 'password789'
    },
    {
        id: uuidv4(),
        nome: 'Jessica Williams',
        email: 'jessica.williams@example.com',
        senha: 'mypassword123'
    },
    {
        id: uuidv4(),
        nome: 'James Jones',
        email: 'james.jones@example.com',
        senha: 'secure456'
    },
    {
        id: uuidv4(),
        nome: 'Olivia Garcia',
        email: 'olivia.garcia@example.com',
        senha: 'pass7890'
    },
    {
        id: uuidv4(),
        nome: 'Benjamin Martinez',
        email: 'benjamin.martinez@example.com',
        senha: 'strongpassword1'
    },
    {
        id: uuidv4(),
        nome: 'Sophia Anderson',
        email: 'sophia.anderson@example.com',
        senha: 'password2secure'
    },
    {
        id: uuidv4(),
        nome: 'Matthew Thomas',
        email: 'matthew.thomas@example.com',
        senha: 'superpass123'
    },
    {
        id: uuidv4(),
        nome: 'Isabella Jackson',
        email: 'isabella.jackson@example.com',
        senha: 'topsecret456'
    },
    {
        id: uuidv4(),
        nome: 'Ethan White',
        email: 'ethan.white@example.com',
        senha: 'letmein789'
    },
    {
        id: uuidv4(),
        nome: 'Mia Harris',
        email: 'mia.harris@example.com',
        senha: 'welcome123'
    },
    {
        id: uuidv4(),
        nome: 'Alexander Clark',
        email: 'alexander.clark@example.com',
        senha: 'hidden456'
    },
    {
        id: uuidv4(),
        nome: 'Ava Lewis',
        email: 'ava.lewis@example.com',
        senha: 'keepit789'
    },
    {
        id: uuidv4(),
        nome: 'William Young',
        email: 'william.young@example.com',
        senha: 'donttell123'
    },
    {
        id: uuidv4(),
        nome: 'Emma King',
        email: 'emma.king@example.com',
        senha: 'trustme456'
    },
    {
        id: uuidv4(),
        nome: 'Mason Wright',
        email: 'mason.wright@example.com',
        senha: 'stayhidden789'
    },
    {
        id: uuidv4(),
        nome: 'Harper Scott',
        email: 'harper.scott@example.com',
        senha: 'safeandsecure123'
    },
    {
        id: uuidv4(),
        nome: 'Logan Adams',
        email: 'logan.adams@example.com',
        senha: 'hiddenkey456'
    },
    {
        id: uuidv4(),
        nome: 'Ella Baker',
        email: 'ella.baker@example.com',
        senha: 'mypassword789'
    }
];

export default usuarios;