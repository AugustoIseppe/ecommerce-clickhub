import express from 'express';
import { createSession } from '../controllers/sessions-controller.js';

const router = express.Router();

router.post('/sessions', createSession);

export default router;