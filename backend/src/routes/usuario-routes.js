import express from 'express';
import { createUsuario, listUsuarios } from '../controllers/usuario-controller.js';

const router = express.Router();

router.post('/usuario', createUsuario);
router.get('/usuario', listUsuarios);

export default router;
