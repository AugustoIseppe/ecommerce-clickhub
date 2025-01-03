import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.resolve("src/uploads/products");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, uploadDir);
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        callback(null, `${time}_${file.originalname}`);
    }
});

export const upload = multer({ storage });


