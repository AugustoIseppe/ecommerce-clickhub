import express from 'express';
import { getFavoritesbyUser, addFavorite, removeFavorite } from '../controllers/favorites-caontroller.js';

const router = express.Router();

router.get('/favorites/:user_id', getFavoritesbyUser);
router.post('/favorites', addFavorite);
router.delete('/favorites/:favorite_id', removeFavorite);

export default router;