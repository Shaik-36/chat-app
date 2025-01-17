// Initialize express router
import { Router } from 'express';
import { registerUser, loginUser, findUser, getUser } from '../Controller/userController.js';

const router = Router();

// Register User
router.post("/register", registerUser);

router.get("/login", loginUser)

router.get("/find/:userId", findUser)

router.get("/", getUser)


export default router;