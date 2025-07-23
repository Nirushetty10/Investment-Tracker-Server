import express from "express";
import { createInvestment, deleteInvestment, getInvestments, updateInvestment } from "../controller/investment.js";

const router = express.Router();

// router.post("/",verifyAdmin, createInvestment);
router.post("/", createInvestment);
// router.put("/:id",verifyAdmin, updateInvestment);
router.put("/:id", updateInvestment);
// router.get("/:id",verifyUser, getInvestments);
router.get("/:id", getInvestments);
// router.delete("/:id",verifyAdmin, deleteInvestment);
router.delete("/:id", deleteInvestment);

export default router;