import express from "express";
import { loginUser, logout } from "../controller/auth.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/logout", logout);

export default router;