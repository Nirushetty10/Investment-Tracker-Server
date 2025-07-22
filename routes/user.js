import express from 'express';
import { createUser, getAllUsers } from '../controller/user.js';
import { verifyAdmin } from '../uitls/verifyToken.js';

const router = express.Router();

// CREATE USER
router.post("/createUser",verifyAdmin, createUser);
// router.post("/createUser" , verifyUser, createUser);

// GET ALL USER
router.get("/getAllUsers",verifyAdmin, getAllUsers);

export default router;