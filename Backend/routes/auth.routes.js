import express from 'express';
import { completeRegistration, login, logout, signup } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup', signup );

router.post('/complete-registration', completeRegistration );

router.post('/login', login );

router.post('/logout', logout );


export default router;