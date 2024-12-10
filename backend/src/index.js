import express from "express";
import cors from 'cors'; // Importação do CORS: Cross-Origin Resource Sharing -> Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes
import userRouter from "./routes/users-routes.js";
import productsRouter from "./routes/products-routes.js";
import multer from 'multer'; // Importação do multer: Middleware para upload de arquivos
import { storage } from './multer-config-user.js'; // Importação da configuração do multer

const upload = multer({ storage: storage }); // Configuração do multer para salvar as imagens no diretório uploads
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors()); // Habilita o CORS

app.use("/", userRouter);
app.use("/", productsRouter);
app.use('/uploads/users', express.static('uploads'));
app.use('/uploads/products', express.static('uploads'));
// app.use('/uploads/products', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta: ${PORT}`);
});
