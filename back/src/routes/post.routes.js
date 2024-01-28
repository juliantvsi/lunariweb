import { Router } from 'express';
import { registerUser, getUsersRegistered } from '../controllers/post.controllers.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', getUsersRegistered);

export default router;
