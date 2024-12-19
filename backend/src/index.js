import express from "express";
import cors from 'cors'; // Importação do CORS: Cross-Origin Resource Sharing -> Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes
import userRouter from "./routes/users-routes.js";
import productsRouter from "./routes/products-routes.js";
import categoriesRouter from "./routes/categories-routes.js";
import address from "./routes/address-routes.js";
import favorites from "./routes/favorites-routes.js";
import orders from "./routes/orders-routes.js";
import multer from 'multer'; // Importação do multer: Middleware para upload de arquivos
import { storage } from './multer-config-user.js'; // Importação da configuração do multer
import path from 'path';

const upload = multer({ storage: storage }); // Configuração do multer para salvar as imagens no diretório uploads
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors()); // Habilita o CORS

app.use("/", userRouter);
app.use("/", productsRouter);
app.use("/", categoriesRouter);
app.use("/", address);
app.use("/", favorites);
app.use("/", orders);
app.use('/uploads/users', express.static('uploads'));
app.use('/uploads/products', express.static(path.resolve('src/uploads/products')));

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta: ${PORT}`);
});
