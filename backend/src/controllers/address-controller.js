import sql from '../db.js';
import { randomUUID } from 'crypto';

// {
//     "user_id": "99f5d7d8-426c-433f-a74f-61777e6e746e",
//     "street": "Rua Harry Potter",
//     "city": "Cidade Hary Potter",
//     "state": "State HP",
//     "zip_code": "13634503",
// }

export const getAddressesbyUser = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        console.log('User ID:', user_id);

        // Adicionar "await" para resolver a promessa
        const address = await sql`SELECT * FROM addresses WHERE user_id = ${user_id}`;
        console.log('Addresses fetched successfully:', address);

        res.status(200).json(address);
    } catch (error) {
        console.error('Error fetching addresses:', error);
        res.status(500).json({ message: 'Failed to fetch addresses' });
    }
};

export const createAdress = async (req, res) => {
    const { user_id, street, city, state, zip_code, number, neighborhood } = req.body;
    const address_id = randomUUID();

    try {
        const newAddress = await sql`INSERT INTO addresses (address_id, user_id, street, city, state, zip_code, number, neighborhood) VALUES (${address_id}, ${user_id}, ${street}, ${city}, ${state}, ${zip_code}, ${number}, ${neighborhood}) RETURNING *`;
        console.log('Address created successfully:', newAddress);
        res.status(200).json(newAddress[0]);
    } catch (error) {
        console.error('Error creating address:', error);
        res.status(500).json({ message: 'Failed to create address' });
    }
}

export const deleteAddress = async (req, res) => {
    const { address_id } = req.params;

    try {
        const deletedAddress = await sql`DELETE FROM addresses WHERE address_id = ${address_id} RETURNING *`;
        console.log('Address deleted successfully:', deletedAddress);
        res.status(200).json(deletedAddress[0]);
    } catch (error) {
        console.error('Error deleting address:', error);
        res.status(500).json({ message: 'Failed to delete address' });
    }
}

export const updateAddress = async (req, res) => {
    const { address_id, user_id, street, city, state, zip_code, number, neighborhood } = req.body;

    try {
        const updatedAddress = await sql`UPDATE addresses SET user_id = ${user_id}, street = ${street}, city = ${city}, state = ${state}, zip_code = ${zip_code}, number = ${number}, neighborhood = ${neighborhood} WHERE address_id = ${address_id} RETURNING *`;
        console.log('Address updated successfully:', updatedAddress);
        res.status(200).json(updatedAddress[0]);
    } catch (error) {
        console.error('Error updating address:', error);
        res.status(500).json({ message: 'Failed to update address' });
    }
}
