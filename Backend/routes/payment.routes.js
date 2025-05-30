import express from 'express'
import { createPayment, verifyPayment } from '../controllers/payment.controllers.js';

const router = express.Router();

router.post('/create-payment', createPayment);
router.post('/verify-payment', verifyPayment);


export default router;