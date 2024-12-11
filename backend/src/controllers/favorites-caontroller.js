import sql from '../db.js';
import { randomUUID } from 'crypto';


export const getFavoritesbyUser = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        console.log('User ID:', user_id);

        // Adicionar "await" para resolver a promessa
        const favorites = await sql`SELECT * FROM favorites WHERE user_id = ${user_id}`;
        console.log('Favorites fetched successfully:', favorites);

        res.status(200).json(favorites);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ message: 'Failed to fetch favorites' });
    }
};

export const addFavorite = async (req, res) => {
    const { user_id, product_id } = req.body;
    const favorite_id = randomUUID();

    try {
        const newFavorite = await sql`INSERT INTO favorites (favorite_id, user_id, product_id) VALUES (${favorite_id}, ${user_id}, ${product_id}) RETURNING *`;
        console.log('Favorite added successfully:', newFavorite);
        res.status(200).json(newFavorite[0]);
    } catch (error) {
        console.error('Error adding favorite:', error);
        res.status(500).json({ message: 'Failed to add favorite' });
    }
}

export const removeFavorite = async (req, res) => {
    const { favorite_id } = req.params;

    try {
        const deletedFavorite = await sql`DELETE FROM favorites WHERE favorite_id = ${favorite_id} RETURNING *`;
        console.log('Favorite removed successfully:', deletedFavorite);
        res.status(200).json(deletedFavorite[0]);
    } catch (error) {
        console.error('Error removing favorite:', error);
        res.status(500).json({ message: 'Failed to remove favorite' });
    }
}