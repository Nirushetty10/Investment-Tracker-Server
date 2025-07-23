import express from "express";
import { createReturn, deleteReturn, getReturns, updateReturn } from "../controller/return.js";

const router = express.Router();

// router.post("/",verifyAdmin, createReturn);
router.post("/", createReturn);
// router.put("/:id",verifyAdmin, updateReturn);
router.put("/:id", updateReturn);
// router.get("/:id",verifyUser, getReturns);
router.get("/:id", getReturns);
// router.delete("/:id",verifyAdmin, deleteReturn);
router.delete("/:id", deleteReturn);

export default router;