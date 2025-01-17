// Initialize express router
import { Router } from 'express';
import { registerUser } from '../Controller/userController.js';

const router = Router();

// Register User
router.post("/register", registerUser);




export default router;