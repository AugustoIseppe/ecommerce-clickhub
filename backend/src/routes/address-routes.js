import express from 'express';
import { getAddressesbyUser, createAdress, deleteAddress, updateAddress } from '../controllers/address-controller.js';

const router = express.Router();

router.get('/address/:user_id', getAddressesbyUser);
router.post('/address', createAdress);
router.delete('/address/:address_id', deleteAddress);
router.put('/address', updateAddress);

export default router;