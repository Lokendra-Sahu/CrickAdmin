import express from 'express';
import { editYourProfile, getYourdetail } from '../controllers/detail.controller.js';

const router = express.Router();
router.get('/profiledetail/:id', getYourdetail);
router.get('/edit-profile/:id', editYourProfile)


export default router;