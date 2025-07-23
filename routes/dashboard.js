import express from 'express';
import { investmentAnalytics } from '../controller/dashboard.js';

const router = express.Router();

// router.get('/paymentsAnalytics/:id', verifyUser, investmentAnalytics);
router.get('/paymentsAnalytics/:id', investmentAnalytics);

export default router;
