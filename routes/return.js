import express from "express";
import { createReturn, deleteReturn, getReturns, updateReturn } from "../controller/return.js";
import { verifyAdmin, verifyUser } from "../uitls/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin, createReturn);
router.put("/:id",verifyAdmin, updateReturn);
router.get("/:id",verifyUser, getReturns);
router.delete("/:id",verifyAdmin, deleteReturn);

export default router;