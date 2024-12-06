import express from "express";
import cors from 'cors'; // Importação do CORS: Cross-Origin Resource Sharing -> Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes
import userRouter from "./routes/users-routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Habilita o CORS

app.use("/", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
