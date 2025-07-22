import express from "express";
import { createInvestment, deleteInvestment, getInvestments, updateInvestment } from "../controller/investment.js";
import { verifyAdmin, verifyUser } from "../uitls/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin, createInvestment);
router.put("/:id",verifyAdmin, updateInvestment);
router.get("/:id",verifyUser, getInvestments);
router.delete("/:id",verifyAdmin, deleteInvestment);

export default router;